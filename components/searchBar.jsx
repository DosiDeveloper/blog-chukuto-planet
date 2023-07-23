import { useState, useEffect } from "react";
import supabase from "../utils/init_supabase";

export default function SearchBar({ setResults, results }) {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
  };

  useEffect(() => {
    if (input !== "") {
      supabase
        .from("posts")
        .select()
        .textSearch("title", `%${input}%`, {
          type: "websearch",
          config: "english",
        })
        .then(({ data }) => {
          setResults(data);
        });
    }
    setResults([]);
  }, [input, setResults]);

  return (
    <div className="input-wrapper">
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
