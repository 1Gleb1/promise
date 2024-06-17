import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getEpisodes = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/episode");
      if (response.status !== 200) {
        setIsError(true);
        setLoading(false);
      } else {
        const data = await response.json();
        setEpisodes(data.results);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <div style={{ width: "900px", margin: "0 auto" }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "900px",
          }}
        >
          {episodes &&
            episodes.map((episodes) => (
              <Card character={episodes} key={episodes.id} />
            ))}
        </div>
      )}
      {isError && <div>Ошибка</div>}
    </div>
  );
};
export default Episodes;
