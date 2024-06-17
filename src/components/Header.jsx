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
