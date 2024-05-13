import Head from "next/head";
import { GetStaticProps } from "next";
import { useState } from "react";
import Container from "../components/container";
import MoreStories from "../components/More-Stories/more-stories";
import HeroPost from "../components/Hero-Post/hero-post";
import Intro from "../components/Intro/intro";
import Layout from "../components/Layout/layout";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import Pagination from "../components/Pagination/Pagination"; // Assuming you have or will create a simple Pagination component

export default function Index({ allPosts, preview }) {
  const edges = allPosts?.edges || []; // Provide a default empty array if edges are undefined
  const [page, setPage] = useState(1);
  const limit = 10; // Adjust based on your preference

  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setPage(newPage);
    // Here you should also refetch the posts based on the new page
    // This could be achieved by modifying the getStaticProps to server-side props if real-time data is needed
  };

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
        <Pagination currentPage={page} handlePageChange={handlePageChange} />
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = await getAllPostsForHome(false, 1, 7); // Ensure this function call is correct
  return {
    props: {
      allPosts: allPosts || {}, // Provide a default empty object if allPosts is undefined
      preview: false,
    },
    revalidate: 8,
  };
};
