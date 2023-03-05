import React, { useState } from 'react';
import SearchForm from './SearchForm';
import CharacterList from './CharacterList';

const App = () => {
  const [characters, setCharacters] = useState([]);

  const handleSearch = (results) => {
    setCharacters(results);
  };

  return (
    <div>
      <h1>Anime Character Search</h1>
      <SearchForm onSearch={handleSearch} />
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
