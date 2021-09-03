import React, { useEffect, useState } from "react";
import SeasonsNav from "./SeasonsNav";
import fetchEpisodesFromCharacter from "../services/fetchEpisodesFromCharacter";
import "../assets/styles/components/characterData.css";

const CharacterData = (props) => {
  const character = props.character;
  
  const [listOfEpisodes, setListOfEpisodes] = useState([])
  
  useEffect(() => {
    fetchEpisodesFromCharacter(character.episode).then(data => setListOfEpisodes(data));
  }, [])

  return (
    <div className="sheet-background">
      <div className="sheet">
        <div className="character-header">
          <h1>{character.name}</h1>
          <button className="close" onClick={props.toggleData}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg></button>
        </div>
        <div className="character-profile">
          <img className="character-profile-image" src={character.image} alt={character.name} />  
          <div className="character-data text-capitalize">
            <h3>
              <strong>Gender: </strong>{character.gender}
            </h3>
            <h3>
              <strong>Species: </strong>{character.species}
            </h3>
            <h3>
              <strong>Origin: </strong>{character.origin.name}
            </h3>
            <h3>
              <strong>Status: </strong>{character.status}
            </h3>
            <h3>
              {
                character.status === "Alive"
                  ? (<strong>Actual Location: </strong>)
                  : (<strong>Last Seen: </strong>)
              }
              {character.location.name}
            </h3>
          </div>
        </div>
        {listOfEpisodes.length > 0 && <SeasonsNav episodes={listOfEpisodes} />}
      </div>
    </div>
  );
};

export default CharacterData;
