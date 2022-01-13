import React from "react";
import { useState, useEffect } from "react";
import "./css/theme-button.css";

export const Toggle = (props) => {
  // const [style, setStyle] = useState("light");
  const [themeName, setthemeName] = useState("light theme");

  // useEffect(() => {
  //   setthemeName(themeName === "light theme"? "dark theme": "light theme");
  // }, [props.toggleTheme, themeName]);

  // function btnTheme() {
  //   setStyle(style === "light" ? "dark" : "light");
  //   setthemeName(themeName === "light theme" ? "dark theme" : "light theme");
  //   console.log("this" + style);
  // }

  return (
    <div>
      <button
        className={["theme-button", props.theme].join(" ")}
        onClick={props.toggleTheme}
      >
        theme
      </button>
    </div>
  );
};
