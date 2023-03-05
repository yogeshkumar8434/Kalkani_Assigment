import React from 'react';

const CharacterList = ({ characters }) => {
  if (!characters.length) {
    return <p>No results found.</p>;
  }

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.mal_id}>
          <img src={character.image_url} alt={character.name} />
          <h3>{character.name}</h3>
          <p>{character.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
