import Post from "../../components/post";
import supabase from "../../utils/init_supabase";

export default function Posting({ post, error }) {
  return <Post post={post} />;
}

export async function getServerSideProps({query}) {
  const { data: post, error } = await supabase
    .from("posts")
    .select(
      `*, users!posts_owner_id_fkey( * ), category!posts_category_id_fkey(*)`
    )
    .eq("id", query.slug)
    .single();
  return {
    props: {
      post,
      error,
    },
  };
}
