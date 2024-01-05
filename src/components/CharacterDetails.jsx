import React from 'react';
 
const CharacterDetails = ({ selectedCharacter }) => {
  if (!selectedCharacter) {
    return <p>No character selected</p>;
  }

  return (
    <div style={ { border: '1px solid #ccc', margin: '10px', padding: '10px', width: '400px' } }>
      <h2>{ selectedCharacter.name }</h2>
      <img src={ selectedCharacter.image } alt={ selectedCharacter.name } style={ { width: '100%' } } />
      <p>Status: { selectedCharacter.status }</p>
      <p>Species: { selectedCharacter.species }</p>
      <p>Type: { selectedCharacter.type }</p>
      <p>Gender: { selectedCharacter.gender }</p> 
    </div>
  );
};
 
export default CharacterDetails
