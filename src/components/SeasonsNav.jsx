import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import '../assets/styles/components/SeasonsNav.css'
import "bootstrap/dist/css/bootstrap.css";

const SeasonsNav = (props) => {
  /* Aumenta en 1 la profundidad del array de episodios generando un subarray por cada temporada*/
  const episodes = props.episodes
    .map((v) => ({
      id: v.id,
      season: 'Season ' + v.episode.match(/\d{1,}/).toString(),
      episodeNumber: v.episode.match(/\d{1,}$/).toString(),
      name: v.name,
      releaseDate: v.air_date,
    }))
    .reduce((result, v) => {
      if (!result[v["season"]]) {
        result[v["season"]] = [];
      }
      result[v["season"]].push(v);
      return result;
    }, {});

  /* Retorna el array de tabs segun las seasons */
  const formatTabs = () => {
    const tabs = [];
    for (const season in episodes) {
      console.log(episodes);
      tabs.push(<TabPanel>
        <div className="custom-table">
          <div className="table-head">
            <div className="table-row">
              <div className="table-data table-data__episode-number">Ep.</div>
              <div className="table-data table-data__episode-title">Title</div>
              <div className="table-data table-data__episode-release-date">Release date</div>
            </div>
          </div>
          <div className="table-body">
            {episodes[season].map(episode => (
              <div className="table-row">
                <div className="table-data table-data__episode-number">{episode.episodeNumber}</div>
                <div className="table-data table-data__episode-title">{episode.name}</div>
                <div className="table-data table-data__episode-release-date">{episode.releaseDate}</div>
              </div>
            ))}
          </div>
        </div>
      </TabPanel>)
      }
    return tabs;
  }

  return (
    <Tabs>
      <TabList>
        {Object.keys(episodes).map((v) => <Tab>{v}</Tab>)}
      </TabList>
      {
        formatTabs()
      }
    </Tabs>
  );
};

export default SeasonsNav;
