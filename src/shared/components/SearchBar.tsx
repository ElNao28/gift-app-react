import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder, onQuery }: Props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handlerSearch = () => {
    onQuery(query);
    setQuery("");
  };

  const handlerKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handlerSearch();
  };

  return (
    <div className="search-container">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder ?? "Buscar"}
        type="text"
        onKeyDown={handlerKeyDown}
      />
      <button onClick={handlerSearch}>Buscar</button>
    </div>
  );
};
