import Head from "next/head";
import { GetStaticProps } from "next";
import { useState } from "react";
import Container from "../components/container";
import MoreStories from "../components/More-Stories/more-stories";
import HeroPost from "../components/Hero-Post/hero-post";
import Intro from "../components/Intro/intro";
import Layout from "../components/Layout/layout";
import BlogPagination from "../components/Pagination/pagination";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

const POSTS_PER_PAGE = 5;

export default function Index({ allPosts: { edges }, preview }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(edges.length / POSTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const selectedPosts = edges.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const heroPost = selectedPosts[0]?.node;
  const morePosts = selectedPosts.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Official Site of John Schibelli - Full Stack Developer`}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <BlogPagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
