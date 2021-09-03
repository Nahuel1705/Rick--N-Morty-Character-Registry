import Header from "./components/Header";
import CharacterThumbnail from "./components/CharacterThumbnail";
import CharacterData from "./components/CharacterData";
import "./assets/styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import { fetchCharactersData } from "./services/fetchCharactersData";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import sync from "css-animation-sync";

const API = "https://rickandmortyapi.com/api/character";

function App() {
  const [data, setData] = useState({});
  const [toggleCharacterData, setToggleCharacterData] = useState(false);
  const [characterData, setCharacterData] = useState({});

  useEffect(() => {
    fetchCharactersData(API).then((fetchedData) => setData(fetchedData));
  }, []);

  useEffect(() => {
    toggleCharacterData
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible");
  }, [toggleCharacterData]);

  const handelNext = () => {
    fetchCharactersData(data.info.next).then((fetchedData) =>
      setData(fetchedData)
    );
    sync("active-pagination");
  };

  const handlePrevious = () => {
    const prevPage = data.info.prev.match(/\d{1,}$/)[0];

    if (prevPage !== 2) {
      fetchCharactersData(
        data.info.prev.replace(/\d{1,}$/, `${prevPage - 4}`)
      ).then((fetchedData) => setData(fetchedData));
      sync("active-pagination");
    }
  };
  const handleToggleData = (character) => {
    setToggleCharacterData(!toggleCharacterData);
    setCharacterData(character);
  };

  return (
    <>
      {!toggleCharacterData && <Header />}

      <div className="container row p-0 mx-auto main-container">
        {data?.results?.length > 0 &&
          data.results.map((character) => (
            <CharacterThumbnail
              key={character.id}
              character={character}
              toggleData={handleToggleData}
            />
          ))}
      </div>
      <IoIosArrowBack
        className={`btn-page prev ${
          data?.info?.prev.match(/\d{1,}$/)[0] !== "2"
            ? "active-pagination"
            : ""
        }`}
        onClick={handlePrevious}
      />
      <IoIosArrowForward
        className="btn-page next active-pagination"
        onClick={handelNext}
      />
      {toggleCharacterData && (
        <CharacterData
          toggleData={handleToggleData}
          character={characterData}
        />
      )}
    </>
  );
}

export default App;
