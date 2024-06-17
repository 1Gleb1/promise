import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import getByAxios from "../api/byAxios";

const LocationsId = () => {
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const id = useParams();

  const [locationName, setLocationName] = useState();
  const [locationDimension, setLocationDimension] = useState();
  const [locationType, setLocationType] = useState("");

  const instance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/",
  });

  const deleteLocation = async () => {
    try {
      const response = await instance.delete(`location/${id.id}`);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  const updateLocation = async () => {
    try {
      const response = await instance.put(`location/${id.id}`, {
        name: locationName,
        dimension: locationDimension,
        type: locationType,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getByAxios(`location/${id.id}`, setLocation, setIsError, setLoading, true);
  }, []);

  return (
    <div style={{ width: "900px", margin: "0 auto" }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
            placeholder={`${location?.name}`}
          />
          <input
            value={locationDimension}
            onChange={(e) => setLocationDimension(e.target.value)}
            placeholder={`${location?.dimension}`}
          />
          <input
            value={locationType}
            onChange={(e) => setLocationType(e.target.value)}
            placeholder={`${location?.type}`}
          />
          <button onClick={() => updateLocation()}>Обновить</button>
          <button onClick={() => deleteLocation()}>Удалить</button>
        </div>
      )}
      {isError && <div>Ошибка</div>}
    </div>
  );
};
export default LocationsId;
