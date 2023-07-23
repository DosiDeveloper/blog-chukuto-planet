import { useState } from "react";
import SearchBar from "../../components/searchBar";
import SearchResultsList from "../../components/searchResultsList";
import PostList from "../../components/postlist";

export default function AllPosts() {
  const [results, setResults] = useState([]);
  // console.log(results)
  return (
    <>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} results={results} />
        <SearchResultsList results={results}/>
      </div>
      <PostList posts={results} />
    </>
  );
}
