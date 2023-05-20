import { downloadMarkdownPost, getMetadataPost } from "../utils/utils";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Head from "next/head";


export function Post({ post_name }) {
  const [isLoading, setIsLoading] = useState(true);
  const [postContent, setPostContent] = useState(null);
  useEffect(() => {
    if (!post_name) {
      const obj = { metadata: { title: "error" }, content: "error" };
      const blob = new Blob([JSON.stringify(obj, null, 2)], {
        type: "application/octet-stream",
      });
      setPostContent(blob);
    } else {
      downloadMarkdownPost(post_name)
        .then((data) => {
          data.text().then((text) => {
            setPostContent(getMetadataPost(text));
            setIsLoading(false);
          });
        })
        .catch((error) => console.error(error));
    }
  }, [post_name]);

  if (isLoading)
    return <p>Loading ...</p>;

  return (
    <>
      <Head>
        <title>{postContent.metadata.title}</title>
      </Head>
      <article>
        <hgroup>
          <h1>{postContent.metadata.title}</h1>
          {postContent.metadata.description ? (
            <h2>{postContent.metadata.description}</h2>
          ) : (
            ""
          )}
        </hgroup>
        <div>
          <time dateTime={postContent.metadata.publishedDate}>
            {postContent.metadata.publishedDate}
          </time>
          <h3>tags:</h3>
          <ul>
            {postContent.metadata.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {postContent.content}
        </ReactMarkdown>
      </article>
    </>
  );
}
