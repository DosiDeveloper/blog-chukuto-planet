import React, { useState, useEffect } from "react";
import PostList from "../../components/postlist";
import supabase from "../../utils/init_supabase";

export default function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      supabase.from("posts").select("*, users ( id, first_name, last_name)").then(data => setPosts(data.data))
    }, []);
    console.log(posts);
    return (
      <div>
        <PostList posts={posts} />
      </div>
    );
}
