import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import getByAsyncAwait from "../api/byAsyncAwait";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getByAsyncAwait("episode", setEpisodes, setIsError, setLoading);
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
