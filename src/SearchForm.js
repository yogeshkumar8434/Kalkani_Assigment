import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://api.jikan.moe/v4/characters?page=0&limit=15&q=${query}&order_by=favorites&sort=desc`;
    const response = await axios.get(url);
    onSearch(response.data.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search anime characters:
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
