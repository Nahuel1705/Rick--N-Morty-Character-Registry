import CharacterThumbnail from './components/CharacterThumbnail';
import './assets/styles/global.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import CharactersData from './hooks/CharactersData';
import RowOfCharacters from './components/RowOfCharacters';

const API = 'https://rickandmortyapi.com/api/character'

const formatRowsData = (data, amountOfColumns) => {
  const rows = [];
  for (let i = 0; i < data.length; i += amountOfColumns) {
    const columns = data.slice(i, i + amountOfColumns);
    console.log(i, data.length);
    console.log(columns);
    rows.push(<RowOfCharacters children={columns.map(column => <CharacterThumbnail key={column.id} {...column}/>)} />)
    console.log(rows);
  }
  return rows
}

function App() {
  const charactersArray = CharactersData(API)
  console.log(charactersArray)
  return (
    <>
      <Header/>
      <div className="container p-0 mx-auto">
        {charactersArray?.length && formatRowsData(charactersArray, 6)}
      </div>
    </>
  );
}

export default App;
