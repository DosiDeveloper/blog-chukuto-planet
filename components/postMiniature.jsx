import Image from "next/image";
import Link from "next/link";

export default function PostMiniature({ title, id }) {
  return (
    <article className="post-card-miniature">
      <header className="post-card-header">
        <Image src="/400x400.svg" alt="" height={400} width={400} />
        <h2 className="text-white">{title}</h2>
      </header>
      <Link
        href={`/posts/${id}`}
        className="post-card-link"
      >
        See the post
      </Link>
    </article>
  );
}


