import Image from "next/image";
import Link from "next/link";
import { downloadMarkdownPost, getMetadataPost } from "../utils/utils";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Head from "next/head";

export function Post_miniature({ title }) {
  return (
    <article className="flex flex-col place-items-center justify-center content-center p-3 md:p-5 text-center bg-slate-800 rounded-2xl h-full w-full shadow-md">
      <header className="flex flex-col bg-slate-500 w-full">
        <Image src="/400x400.svg" alt="" height={400} width={400} />
        <h2 className="text-white">{title}</h2>
        <br></br>
      </header>
      <Link
        href={"/post/" + title}
        className="rounded-md border-b-4 border-red-700"
      >
        See the post
      </Link>
    </article>
  );
}

export function Post({ post }) {
  const [isLoading, setIsLoading] = useState(true);
  const [postContent, setPostContent] = useState(null);

  // NO TOCAR CACA 
  useEffect(() => {
    if (!post) {
      const obj = { metadata: { title: "error" }, content: "error" };
      const blob = new Blob([JSON.stringify(obj, null, 2)], {
        type: "application/octet-stream",
      });
      setPostContent(blob);
    } else {
      downloadMarkdownPost(post.attachment)
        .then((data) => {
          data.text().then((text) => {
            setPostContent(getMetadataPost(text));
            setIsLoading(false);
          });
        })
        .catch((error) => console.error(error));
    }
  }, [post]);

  if (isLoading) return <p>Loading ...</p>;

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
