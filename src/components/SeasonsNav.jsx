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
        <table>
          <thead className="episodes-table__header">
            <tr>
              <th className="episodes-table__header--number">Ep.</th>
              <th className="episodes-table__header--title">Title</th>
              <th className="episodes-table__header--release-date">Release date</th>
            </tr>
          </thead>
          <tbody className="episodes-table__body">
            {episodes[season].map(episode => (
              <tr>
                <td className="episodes-table__col--number">{episode.episodeNumber}</td>
                <td className="episodes-table__col--title">{episode.name}</td>
                <td className="episodes-table__col--release-date">{episode.releaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
