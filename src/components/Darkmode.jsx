import React from "react";
import Sun1 from "/Sun1.png";
import Moon1 from "/Moon1.png";
import "./Darkmode.css";

const Darkmode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkMode();
  }

  return (
    <div className="dark_mode ">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label className="dark_mode_label flex gap-2  " for="darkmode-toggle">
        <img className="h-7 pt-1 pl-1 " src={Sun1} alt="sun pic" />
        <img className="h-7 mr-5 pt-1 pr-1" src={Moon1} />
      </label>
    </div>
  );
};

export default Darkmode;
