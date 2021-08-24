import React, { useEffect, useState } from "react";
import EsisodesListRow from "./EpisodesListRow";
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
        <div className="character-profile">
          <div className="character-cover ">
            <img className="character-profile-image" src={character.image} alt={character.name} />
            <h1>{character.name}</h1>
          </div>
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
        <div className="row list-of-episodes">
          {
            listOfEpisodes?.length > 0 &&
            listOfEpisodes.map(episode => <EsisodesListRow episode={episode}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default CharacterData;
