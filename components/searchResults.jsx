export default function SearchResult({ result, id }) {
  return (
    <div
      className="search-result"
      onClick={(_) => alert(`You selected ${result} ${id}!`)}
    >
      {result}
    </div>
  );
}
