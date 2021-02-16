import { useState } from "react";
import apiClient from "../services/ApiClient";

const { getSearchData } = apiClient;

const SearchForm = ({ token, setResponseData, category, setCategory }) => {
  const [query, setQuery] = useState("");

  const search = (e) => {
    e.preventDefault();
    if (query.trim()) {
      getSearchData(token, query, category, setResponseData);
    }
    setQuery("");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" onClick={search}>
        <i className="fas fa-search"></i>
      </button>
      <select
        name="items"
        className="category-dropdown"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="track">Tracks</option>
        <option value="artist">Artists</option>
        <option value="album">Albums</option>
        <option value="playlist">Playlists</option>
      </select>
    </form>
  );
};

export default SearchForm;
