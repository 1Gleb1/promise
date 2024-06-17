async function getByAsyncAwait(url, setData, setError, setLoading) {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/" + url);
    if (response.status !== 200) {
      setError(true);
      setLoading(false);
    } else {
      const data = await response.json();
      setData(data.results);
      setLoading(false);
    }
  } catch (e) {
    setError(true);
  }
}

export default getByAsyncAwait;
