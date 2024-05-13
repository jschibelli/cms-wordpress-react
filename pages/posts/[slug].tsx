import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import PostBody from "../../components/Post-Body/post-body";
import MoreStories from "../../components/More-Stories/more-stories";
import Header from "../../components/Header/header";
import PostHeader from "../../components/Post-Header/post-header";
import SectionSeparator from "../../components/Section-Seperator/section-separator";
import Layout from "../../components/Layout/layout";
import PostTitle from "../../components/Post-Title/post-title";
import Tags from "../../components/Tags/tags";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";

export default function Post({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta
                  property="og:url"
                  content={`https://schibelli.com${router.asPath}`}
                />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta
                  property="og:image"
                  content={
                    post.featuredImage?.node?.sourceUrl ||
                    "http://vfo.fzi.mybluehost.me/wp-content/uploads/2024/03/cropped-OIG.jpg"
                  }
                />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                  property="twitter:url"
                  content={`https://schibelli.com${router.asPath}`}
                />
                <meta property="twitter:title" content={post.title} />
                <meta property="twitter:description" content={post.excerpt} />
                <meta
                  property="twitter:image"
                  content={
                    post.featuredImage?.node?.sourceUrl ||
                    "https://schibelli.com/default-twitter-image.jpg"
                  }
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};
