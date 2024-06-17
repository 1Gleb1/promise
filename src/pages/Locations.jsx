import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import getByAxios from "../api/byAxios";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getByAxios("location", setLocations, setIsError, setLoading);
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
