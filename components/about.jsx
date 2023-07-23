import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getMarkdownPost, loadImageFromSupabase } from "../utils/utils";
import Image from "next/image";

export default function AboutAndLastPost({ title, id, updated_at, miniature }) {
  const About = () => {
    const [content, setContent] = useState("");
    useEffect(() => {
      getMarkdownPost("post/About.md").then((data) => setContent(data));
    }, []);
    return <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>;
  };
  return (
    <section className="article-about-container">
      <section className="about-container">
        <About />
      </section>
      <section className="article-container">
        <article className="article">
          <Image src={loadImageFromSupabase(miniature)} alt="" height={400} width={400} />
          <h1>{title}</h1>
          <div className="container-info">
            <time dateTime={updated_at}>
              {new Date(updated_at).toLocaleDateString()}
            </time>
            <Link href={`/posts/${id}`} className="button-link">
              See the post
            </Link>
          </div>
        </article>
      </section>
    </section>
  );
}
