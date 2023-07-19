import Link from "next/link";

export default function PostList({ posts }) {
  return (
    <div>
      <h2>Lista de Posts:</h2>
      <ul>
        <li>all post</li>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <Link href={`/posts/${post.id}`}>Go to the post</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
