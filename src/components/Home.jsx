import React from "react";
import manoj1 from "/manoj1.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

import { FaGithub } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className=" home max-w-screen-2xl container mx-auto px-4  md:px-20 my-20 md:h-[600px] bg-[#ADD8E5]  "
      >
        <div className="flex flex-col md:flex-row md:ml-[150px] ">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 md:order-1 order-2 ">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello,I'm a </h1>
              <ReactTyped
                className="text-[#DC143C]  "
                strings={["Reactjs Developer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />

            <p className="text-sm md:text-md text-justify">
              Hello! My name is Manoj Kumar. Passionate frontend Developer with
              proficent in Reactjs, HTML, CSS, JS,tailwindcss,bootstrap and Git.
              Currently seeking opportunities in ReactJS or frontend development
              where I can leverage my skills to build innovative solutions.
              Let’s connect and create something amazing together!.
            </p>
            <br />
            {/* social media icon */}
            <div className="flex flex-col items-center md:flex-row justify-start space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className=" font-bold ml-2 space-y-6   ">Available On</h1>
                <ul className="flex  space-x-6 shadow-xl shadow-[#DC143C]">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/manoj-kumar-13a392289/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl pointer-cursor hover:scale-150 duration-300  " />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/thisismanojmehra" target="_blank">
                      <FaTelegram className="text-2xl pointer-cursor  hover:scale-150 duration-300" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Manojmehra22" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer hover:scale-150 duration-300" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-36 md:mt-20 mt-8 order-1  ">
            <img
              src={manoj1}
              className="rounded-full border-[#DC143C] md:h-[350px] md:w-[350px] shadow-md shadow-[#DC143C] object-cover "
            />
          </div>
        </div>
      </div>
      <hr className="border-[#DC143C] ml-20 mr-20 " />
    </>
  );
}

export default Home;
