import {
  getMarkdownPost,
  getMetadataPost,
  loadImageMarkdown,
} from "../utils/utils";
import { useState, useEffect, } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Head from "next/head";
import Image from "next/image";

export default function Post({ post }) {
  const [isLoading, setIsLoading] = useState(true);
  const [postContent, setPostContent] = useState(null);

  // NO TOCAR CACA
  useEffect(() => {
    if (post) {
      getMarkdownPost(post.content).then((value) => {
        const { metadata, content } = getMetadataPost(value);
        setPostContent({
          ...post,
          content,
          metadata,
        });
        setIsLoading(false);
      });
    }
  }, [post]);

  if (isLoading) return (
    <section className="loader-container">

    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </section>
  );
  return (
    <>
      <Head>
        <title>Chukuto Planet - {postContent.title}</title>
      </Head>
      <article className="post">
        <header>
          <h1>{postContent.title}</h1>
          <p>
            {postContent.description ? <h2>{postContent.description}</h2> : ""}
          </p>
          <h2>
            Author: {postContent.users.first_name} {postContent.users.last_name}
          </h2>
          <time dateTime={postContent.created_at}>
            {new Date(postContent.created_at).toLocaleDateString()}
          </time>
          <div>
            <p>tags:</p>
            <ul>
              <li>{postContent.category.global_name}</li>
            </ul>
          </div>
        </header>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="post-content"
          components={{
            img: ({ src, ...props }) => {
              return (
                <Image
                  src={loadImageMarkdown(src)}
                  alt={props.alt}
                  width={200}
                  height={200}
                  {...props}
                />
              );
            },
          }}
        >
          {postContent.content}
        </ReactMarkdown>
      </article>
    </>
  );
};
