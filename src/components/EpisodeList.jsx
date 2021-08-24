import React from 'react';
import EsisodesListRow from './EpisodesListRow';
import "bootstrap/dist/css/bootstrap.css";

const EpisodeList = (props) => {
  episodeList = props.espisodes;

  return(
    <div className="row">
      {episodeList.map(episode => <EsisodesListRow episode={episode} />)}
    </div>
  )
}