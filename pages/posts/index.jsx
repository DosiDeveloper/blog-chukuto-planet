import { useState, useEffect } from "react";
import PostList from "../../components/postlist";
import supabase from "../../utils/init_supabase";
import SearchBar from "../../components/searchBar"
import SearchResultsList from "../../components/searchResultsList";

export default function AllPosts() {
    const [results, setResults] = useState([]);
    // console.log(results)
    return (
      <div className="search-bar-container">
        <SearchBar setResults={setResults} results={results}/>
        <SearchResultsList results={results} />
      </div>
    );
}
