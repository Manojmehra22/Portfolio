import React from "react";
import html from "/html.png";
import css from "/css.jpg";
import javascript from "/java-script.png";
import Reactjs from "/reactjs.png";
import tailwind from "/tailwind.png";
import github from "/github.png";
import Bootstrap from "/bootstrap.png";
import responsive from "/responsive.avif";

function Skills() {
  const cardItems = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: Reactjs,
      name: "ReactJs",
    },
    {
      id: 5,
      logo: tailwind,
      name: "TailwindCSS",
    },
    {
      id: 6,
      logo: github,
      name: "GitHub",
    },
    {
      id: 7,
      logo: Bootstrap,
      name: "BootStrap",
    },
    {
      id: 8,
      logo: responsive,
      name: "Responsive",
    },
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16"
    >
      <h1 className="text-xl text-[#006FDD]  mb-5">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
        {cardItems.map(({ id, logo, name }) => (
          <div
            className="flex flex-col items-center justify-center  
              p-1 mt-5 cursor-pointer hover:scale-110 duration-300 "
            key={id}
          >
            <img
              src={logo}
              className="h-[150px] w-[120px] shadow-xl shadow-[#DC143C] rounded-lg
              "
              alt=""
            />
            <div>
              <div className="text-center">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
