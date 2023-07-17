import { downloadMarkdownPost, getMetadataPost } from "../utils/utils";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Head from "next/head";
import { loaderImageFromSupabase } from "../utils/loaderImageFromSupabase";


export function Post_miniature({ title }) {
  return (
    <article className="flex flex-col place-items-center justify-center content-center p-3 md:p-5 text-center bg-slate-800 rounded-2xl h-full w-full shadow-md">
      <header className="flex flex-col bg-slate-500 w-full">
        <Image src="/400x400.svg" alt="" width={400} height={400} />
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

function loadImageMarkdown(src) {
  let { data: url } = supabase.storage
    .from("blog_storage")
    .getPublicUrl(`image/${src}`);
  return url.publicUrl;
}

export function Post({ post }) {
  const [isLoading, setIsLoading] = useState(true);
  const [postContent, setPostContent] = useState(null);

  // NO TOCAR CACA
  useEffect(() => {
    if (post) {
      setIsLoading(false);
      const { metadata, content } = getMetadataPost(post.content);
      setPostContent({
        ...post,
        content,
        metadata,
      });
    }
  }, []);

  if (isLoading)
    return <p>Loading ...</p>;

  return (
    <>
      <Head>
        <title>Chukuto Planet - {postContent.title}</title>
      </Head>
      <article className="post">
        <header className="p-8 border-b-2 border-slate-900 text-center">
          <h1 className="text-5xl uppercase font-bold">{postContent.title}</h1>
          <p>
            {postContent.description ? <h2>{postContent.description}</h2> : ""}
          </p>
          <h2>
            Author: {postContent.users.first_name} {postContent.users.last_name}
          </h2>
          <time
            dateTime={postContent.created_at}
            className="self-center text-sm"
          >
            {new Date(postContent.created_at).toLocaleDateString()}
          </time>
          <div>
            <p>tags:</p>
            <ul className="flex justify-center flex-row text-sm">
              <li>{postContent.category.global_name}</li>
            </ul>
          </div>
        </header>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="text-lg mt-2"
          components={{
            img: ({ src, ...props }) => {
              console.log(src);
              return (
                <img
                  src={loadImageMarkdown(src)}
                  alt="mucho texto"
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
}
