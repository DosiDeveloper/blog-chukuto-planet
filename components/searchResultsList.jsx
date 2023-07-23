import SearchResult from "./searchResults";

export default function SearchResultsList({ results }) {
  return (
    <div className="results-list">
      {results.length > 0
        ? results.map((result, index) => {
            return <SearchResult result={result.title} id={result.id} key={index} />;
          })
        : <></>}
    </div>
  );
}
// te la boca lui
