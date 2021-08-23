import React from "react";
import "../assets/styles/components/characterData.css";

const CharacterData = (props) => {
  const character = props.character;
  console.log("hello");
  return (
    <div className="sheet-background">
      <div className="sheet">
        <div className="character-image ">
          <img src={character.image} alt={character.name} />
          <h1>{character.name}</h1>
        </div>
        <div className="character-data">
          <h3>
            <strong>Gender: </strong>
            {character.gender}
          </h3>
          <h3>
            <strong>Species: </strong>
            {character.species}
          </h3>
          <h3>
            <strong>Origin: </strong>
            {character.origin.name}
          </h3>
          <h3>
            <strong>Status: </strong>
            {character.status}
          </h3>
          <h3>
            {character.status === "Alive" ? (
              <strong>Actual Location: </strong>
            ) : (
              <strong>Last Seen: </strong>
            )}
            {character.location.name}
          </h3>
        </div>
        <h1>Appears in episodes: </h1>
      </div>
    </div>
  );
};

export default CharacterData;
