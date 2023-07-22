import SearchResult from "./searchResults";

export default function SearchResultsList({ results }) {
  return (
    <div className="results-list">
      {results.length > 0
        ? results.map((result, index) => {
          console.log(result)
            return <SearchResult result={result.title} key={index} />;
          })
        : <></>}
    </div>
  );
}
// te la boca lui
