import { useState, useEffect } from "react";

const CharactersData = (API) => {
    const [characters, setCharacters] = useState({});
    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setCharacters(data))
    }, []);

    return(characters.results)
}

export default CharactersData;