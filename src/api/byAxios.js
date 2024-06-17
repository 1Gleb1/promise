import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

async function getByAxios(url, setData, setError, setLoading, id) {
  try {
    const response = await instance(url);
    if (response.status !== 200) {
      setError(true);
      setLoading(false);
    } else {
      setData(id ? response.data : response.data.results);
      setLoading(false);
    }
  } catch (e) {
    setError(true);
    setLoading(false);
  }
}

export default getByAxios;
