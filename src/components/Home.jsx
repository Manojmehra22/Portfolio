import React from "react";
import mypic from "/mypic3.jpg";
import manoj1 from "/manoj1.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 md:order-1 order-2 ">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello,I'm a </h1>
              <ReactTyped
                className="text-[#DC143C] font-bold "
                strings={["Reactjs Developer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />

            <p className="text-sm md:text-md text-justify">
              Hello! My name is Manoj Kumar. Passionate JavaScript Developer
              with a year of experience specializing in ReactJS and NodeJS.
              Proficient in HTML, CSS, JS, MongoDB, PHP, SQL, and Git. Currently
              seeking opportunities in ReactJS or MERN stack development where I
              can leverage my skills to build innovative solutions. Let’s
              connect and create something amazing together!.
            </p>
            <br />
            {/* social media icon */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className=" font-bold space-y-6 ml-8 ">Available On</h1>
                <ul className="flex space-x-6 shadow-xl shadow-[#DC143C]">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/manoj-kumar-13a392289/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl pointer-cursor" />
                    </a>
                  </li>
                  <li>
                    {""}
                    <FaTelegram className="text-2xl pointer-cursor" />
                  </li>
                  <li>
                    <a href="https://github.com/Manojmehra22" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/m2_k_memes/"
                      target="_blank"
                    >
                      <FaInstagramSquare className="text-2xl pointer-cursor" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-36 md:mt-20 mt-8 order-1">
            <img
              src={manoj1}
              className="rounded-full border-[#DC143C] md:h-[450px] md:w-[450px] shadow-xl shadow-[#DC143C] "
            />
          </div>
        </div>
      </div>
      <hr className="border-[#DC143C] ml-20 mr-20" />
    </>
  );
}

export default Home;
