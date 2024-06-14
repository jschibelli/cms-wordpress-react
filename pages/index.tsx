import Head from "next/head";
import { GetStaticProps } from "next";
import { useState } from "react";
import Container from "../components/container";
import MoreStories from "../components/More-Stories/more-stories";
import HeroPost from "../components/Hero-Post/hero-post";
import Intro from "../components/Intro/intro";
import Layout from "../components/Layout/layout";
import { getAllPostsForHome } from "../lib/api";
import PaginationComponent from "../components/Pagination/PaginationComponent";


const POSTS_PER_PAGE = 5;

export default function Index({ allPosts: { edges }, preview }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const displayedPosts = edges.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const heroPost = displayedPosts[0]?.node;
  const morePosts = displayedPosts.slice(1);

  const pageCount = Math.ceil(edges.length / POSTS_PER_PAGE);

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

        <PaginationComponent
          page={currentPage}
          count={pageCount}
          onChange={handleChange}
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
