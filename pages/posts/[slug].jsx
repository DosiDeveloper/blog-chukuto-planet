import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Post } from "../../components/post";
import { getPostByTitleSupabase } from "../../utils/utils_supabase";

export default function Posting() {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getPostByTitleSupabase(
      router.query.slug,
      `*, users!posts_owner_id_fkey( * ), category!posts_category_id_fkey(*)`
    )
      .then((data) => {
        setIsLoading(false);
        setPost(data.data);
      })
      .catch((e) => console.error(e));
  });
  return <>{isLoading ? <h1>Loading...</h1> : <Post post={post} />}</>;
}
