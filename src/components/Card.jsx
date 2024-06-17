import React from "react";

const Card = ({ character }) => {
  return (
    <div
      style={{
        width: "120px",
        height: "120px",
        margin: "15px 10px",
        padding: "10px 15px",
        border: "1px solid black",
      }}
    >
      <h5>{character.name}</h5>
      <p>{character.status}</p>
    </div>
  );
};

export default Card;
