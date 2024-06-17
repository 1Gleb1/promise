import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          setIsError(true);
        }
      })
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch((e) => {
        setIsError(true);
      });
  }, []);

  return (
    <div style={{ width: "900px", margin: "0 auto" }}>
      {loading && !isError ? (
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
          {characters &&
            characters.map((character) => (
              <Card character={character} key={character.id} />
            ))}
        </div>
      )}
      {isError && <div>Ошибка</div>}
    </div>
  );
};
export default Characters;
