import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { Link } from "react-router-dom";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
  });

  const getLocations = async () => {
    try {
      const response = await instance("location");
      if (response.status !== 200) {
      } else {
        setLocations(response.data.results);
        setLoading(false);
      }
    } catch (e) {
      setIsError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocations();
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
          {locations &&
            locations.map((location) => (
              <Link to={`/location/${location.id}`}>
                <Card character={location} key={location.id} />
              </Link>
            ))}
        </div>
      )}
      {isError && <div>Ошибка</div>}
    </div>
  );
};
export default Locations;
