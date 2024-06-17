function getByNativeFetch(url, setData, setError, setLoading) {
  fetch(`https://rickandmortyapi.com/api/` + url)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        setError(true);
      }
    })
    .then((data) => {
      setData(data.results);
      setLoading(false);
    })
    .catch((e) => {
      setError(true);
    });
}

export default getByNativeFetch;
