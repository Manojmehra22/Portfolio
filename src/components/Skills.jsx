import React, { useEffect } from "react";
import html from "/html.png";
import css from "/css.jpg";
import javascript from "/java-script.png";
import Reactjs from "/reactjs.png";
import tailwind from "/tailwind.png";
import github from "/github.png";
import Bootstrap from "/bootstrap.png";
import responsive from "/responsive.avif";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
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
      data-aos="zoom-in"
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-16  bg-[#ADD8E5]"
    >
      <h1 className="text-xl text-[#006FDD]  mb-5 md:ml-[150px]">Skills</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3 md:ml-[100px] md:mr-[100px]">
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
      <hr className="border-[#DC143C] mt-20 ml-20 mr-20" />
    </div>
  );
}

export default Skills;
