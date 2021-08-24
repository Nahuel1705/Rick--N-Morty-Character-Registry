import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

const EsisodesListRow = (props) => {
  const episode = props.episode;

  return(
    <>
      <div className="col-2"><h4>{episode.episode}</h4></div>
      <div className="col-6"><h4>{episode.name}</h4></div>
      <div className="col-4 text-end"><h4>{episode.air_date}</h4></div>
    </>
  )
}

export default EsisodesListRow;