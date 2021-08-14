import {useState, useEffect } from "react";

const GetCharactersData = (API) => {
    const [data, setData] = useState({});

    useEffect(() => {
            const fetchData = async () => {
                const x = {
                    nextPage: API,
                    characters: []
                }
                for (let i = 0; i < 3; i++) {
                    const response = await fetch(x.nextPage);
                    const fetchedData = await response.json();
                    x.nextPage = fetchedData.info.next;
                    x.characters = x.characters.concat(fetchedData.results);
                    
                }

                setData(x);
            }

        fetchData();
    },[]);

    return data;
}

export default GetCharactersData;