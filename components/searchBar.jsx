import { useState, useEffect } from "react";
import supabase from "../utils/init_supabase";

export default function SearchBar({setResults, results}) {
  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
  };

  useEffect(()=> {
    supabase.from("posts").select("*").ilike("title", `%${results}%`).then(({data}) => {
      setResults(data)
    })  
  }, [input])

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
