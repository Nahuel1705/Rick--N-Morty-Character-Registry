import CharacterThumbnail from './components/CharacterThumbnail';
import './assets/styles/global.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import GetCharactersData from './hooks/GetCharactersData';
import RowOfCharacters from './components/RowOfCharacters';
import { useEffect, useState } from 'react';

const API = 'https://rickandmortyapi.com/api/character'

const formatRowsData = (data, amountOfColumns) => {
  const rows = [];
  let rowId = 1;

  for (let i = 0; i < data.length; i += amountOfColumns) {
    const columns = data.slice(i, i + amountOfColumns);
    rows.push(
      <RowOfCharacters key={rowId}
        children={
          columns.map(column => (
            <CharacterThumbnail key={column.id} {...column}/>
          ))} 
        />)
    rowId ++;

  }

  return rows
}



function App() {
  const data = GetCharactersData(API)

  console.log(data)
  
  return (
    <>
      <Header/>
      <div className="container p-0 mx-auto">
        {data?.characters?.length > 0 &&
        formatRowsData(data.characters, 6)}
      </div>
    </>
  );
}

export default App;
