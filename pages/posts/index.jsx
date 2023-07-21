import React, { useState, useEffect } from "react";
import PostList from "../../components/postlist";
import supabase from "../../utils/init_supabase";

export default function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
      supabase.from("posts").select("*, users ( id, first_name, last_name)").then(data => setPosts(data.data))
    }, []);
    console.log(posts);
    return (
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
        <PostList posts={posts} />
      </div>
    );
}
