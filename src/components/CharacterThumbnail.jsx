import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/styles/components/CharacterThumbnail.css";

const CharacterThumbnail = (props) => {
  const character = props.character;
  return (
    <>
      <div className="col-2 character">
        <div className="character-container">
          <div
            onClick={() => props.showData(character)}
            className="character-overlay"
          >
            <div className="overlay-text">
              <h4 className="character-name">{character.name}</h4>
              <p className="character-location">{character.location.name}</p>
            </div>
          </div>
          <img
            className="img-fluid shadow mx-auto d-block character-image"
            src={character.image}
            alt={character.name}
          />
        </div>
      </div>
    </>
  );
};

export default CharacterThumbnail;
