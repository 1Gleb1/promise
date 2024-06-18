import React from "react";
import { Link } from "react-router-dom";
import { atom, useAtom } from "jotai";
import { useAtomValue } from "jotai/react";

const themeAtom = atom("light");

export const ThemeSwitcher = () => {
  const [theme] = useAtomValue(themeAtom);

  return <main>{theme}</main>;
};

const Header = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  return (
    <div
      style={{
        width: "500px",
        margin: "0 auto",
        marginBottom: "30px",
        padding: "20px",
        backgroundColor: theme === "light" ? "white" : "rgba(0, 0, 0, 0.5)",
        color: theme === "light" ? "black" : "white",
        boxShadow: theme === "light" ? "0 0 10px black" : "0 0 10px black",
        borderRadius: "10px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link
          style={{ color: theme === "light" ? "black" : "white" }}
          to="/characters"
        >
          Character
        </Link>
        <Link
          style={{ color: theme === "light" ? "black" : "white" }}
          to="/episodes"
        >
          Episode
        </Link>
        <Link
          style={{ color: theme === "light" ? "black" : "white" }}
          to="/locations"
        >
          Location
        </Link>
        <main>
          <p>Theme is {theme}</p>

          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            Toggle Theme
          </button>
        </main>
      </div>
    </div>
  );
};

export default Header;
