export async function fetchCharactersData(API, page = 1) {
  const response = await fetch(API);
  const data = await response.json();

  if (page < 3) {
    const nextPage = await fetchCharactersData(data.info.next, ++page);
    nextPage.results = data.results.concat(nextPage.results);
    return nextPage;
  } else {
    return data;
  }
}
