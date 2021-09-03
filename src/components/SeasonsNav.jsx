import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import '../assets/styles/components/SeasonsNav.css'
import "bootstrap/dist/css/bootstrap.css";

const SeasonsNav = (props) => {
  const episodes = props.episodes
    .map((v) => ({
      id: v.id,
      season: 'Season ' + v.episode.match(/\d{1,}/).toString(),
      episode: v.episode.match(/\d{1,}$/).toString(),
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

  const formatTabs = () => {
    const tabs = [];
    for (const season in episodes) {
      console.log(episodes);
      tabs.push(<TabPanel>
        {episodes[season].map((v) => (
          <div className="row">
            <div className="col-1">{v.episode}</div>
            <div className="col-8">{v.name}</div>
            <div className="col-3">{v.releaseDate}</div>
          </div>
        ))}
      </TabPanel>)
    }
    console.log(tabs);
    return tabs;
  }

  return (
    <Tabs className="tabs-container">
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
