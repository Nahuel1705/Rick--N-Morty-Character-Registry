const fetchEpisodesFromCharacter = async (episodes) => {
  const list = [];

  for (let i = 0; i < episodes.length; i++) {
    const response = await fetch(episodes[i]);
    const data = await response.json();
    list.push(data);
  }

  return list;
};

export default fetchEpisodesFromCharacter;
