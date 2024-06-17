import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        width: "500px",
        margin: "0 auto",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to="/characters">Character</Link>
        <Link to="/episodes">Episode</Link>
        <Link to="/locations">Location</Link>
      </div>
    </div>
  );
};

export default Header;
