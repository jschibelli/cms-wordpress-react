import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/Post-Body/post-body"
import Header from "../../components/Header/header";
import PostHeader from "../../components/Post-Header/post-header";
import Layout from "../../components/Layout/layout";
import { getPostAndMorePosts, getAllPostsWithSlug } from "../../lib/api";
import PostTitle from "../../components/Post-Title/post-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import { PostType } from "../../types/post"; // <-- Correct import statement
import MoreStories from "../../components/More-Stories/more-stories";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
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
                <title>{post.title} | Next.js Blog Example</title>
                {post.ogImage && (
                  <meta property="og:image" content={post.ogImage.url} />
                )}
                {post.ogDescription && (
                  <meta
                    property="og:description"
                    content={post.ogDescription}
                  />
                )}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories} // Ensure categories is passed
              />
              <PostBody content={post.content} />
            </article>
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
}) => {
  const data = await getPostAndMorePosts(params.slug, preview, null);
  const content = await markdownToHtml(data.post.content || "");

  return {
    props: {
      preview,
      post: {
        ...data.post,
        content,
      },
      morePosts: data.posts,
    },
    revalidate: 1,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};