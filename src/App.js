import Header from "./components/Header";
import CharacterThumbnail from "./components/CharacterThumbnail";
import CharacterData from "./components/CharacterData";
import "./assets/styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import { fetchCharactersData } from "./services/fetchCharactersData";
import { useEffect, useState } from "react";

const API = "https://rickandmortyapi.com/api/character/?page=1";

function App() {
  const [data, setData] = useState({});
  const [showCharacterData, setShowCharacterData] = useState(false);
  const [characterData, setCharacterData] = useState({});

  useEffect(() => {
    fetchCharactersData(API).then((fetchedData) => setData(fetchedData));
  }, []);

  const handelNext = () => {
    fetchCharactersData(data.info.next).then((fetchedData) =>
      setData(fetchedData)
    );
  };

  const handleShowData = (character) => {
    setShowCharacterData(!showCharacterData);
    debugger;
    !showCharacterData
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible");
    debugger;
    setCharacterData(character);
  };

  return (
    <>
      {!showCharacterData && <Header />}

      <div className="container row p-0 mx-auto">
        {data?.results?.length > 0 &&
          data.results.map((character) => (
            <CharacterThumbnail
              key={character.id}
              character={character}
              showData={handleShowData}
            />
          ))}
      </div>
      <button onClick={handelNext}>Next</button>
      {showCharacterData && <CharacterData character={characterData} />}
    </>
  );
}

export default App;
