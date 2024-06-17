import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import getByNativeFetch from "../api/byNativeFetch";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // const charactersAtom = atom([]);
  // const [characters, setCharacters] = useAtom(charactersAtom);
  // console.log(useAtomValue(themeAtom));

  useEffect(() => {
    getByNativeFetch("character", setCharacters, setIsError, setLoading);
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
