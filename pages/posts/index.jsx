import { useState } from "react";
import SearchBar from "../../components/searchBar";
import PostList from "../../components/postlist";

export default function AllPosts() {
  const [results, setResults] = useState([]);
  return (
    <>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} results={results} />
      </div>
      <PostList posts={results} />
    </>
  );
}
