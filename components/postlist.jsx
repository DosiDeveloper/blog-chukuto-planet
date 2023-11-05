import PostMiniature from "./postMiniature";

export default function PostList({ posts }) {
  return (
    <div className="post-list-container">
      <section className="post-list">
        {posts.map((post) => (
          <PostMiniature title={post.title} id={post.id} key={post.id} />
        ))}
      </section>
    </div>
  );
}
