import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import supabase  from "../utils/init_supabase";
import "../styles/SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");


  useEffect(() => {
    const realtime = supabase
      .channel("any")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "posts" },
        (payload) => {
          console.log("Change received!", payload);
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(realtime);
    };
  });

  const handleChange = (value) => {
    setInput(value);
    supabaseData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
