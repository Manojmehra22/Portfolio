import React, { useState } from "react";
import flogo from "/flogo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: "Home",
    },

    {
      id: 2,
      text: "Skills",
    },
    {
      id: 3,
      text: "Projects",
    },
    {
      id: 4,
      text: "Hire Me",
    },
    {
      id: 5,
      text: "Resume",
      isResume: true,
    },
  ];

  const handleResumeDownload = () => {
    const resumePath = "./MANOJ KUMAR-Resume.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "MANOJ KUMAR-Resume.pdf";
    link.click();
  };

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  return (
    <>
      <div className=" navbar max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed shadow-md  top-0 left-0 right-0 z-10">
        <div className="flex justify-between items-center h-16 md:ml-[150px] md:mr-[150px]">
          <div className="flex items-center">
            <img
              src={flogo}
              className="h-12 w-15 rounded-full mt-1"
              alt="Logo"
            />
            <h1 className="font-semibold text-xl cursor-pointer">
              Mano<span className="text-[#006FDD] text-2xl">j</span>
              <p className="text-sm tracking-wider font-medium">
                Frontend Developer
              </p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text, isResume }) => (
                <li
                  className="hover:text-[#006FDD] hover:scale-110 duration-100 hover:cursor-pointer  "
                  key={id}
                >
                  {isResume ? (
                    <button
                      className="border h-[30px] w-[80px] text-white  bg-[#0A66C2] hover:text-[black] hover:bg-[white] rounded-sm hover:rounded-sm  "
                      onClick={handleResumeDownload}
                    >
                      {text}
                    </button>
                  ) : (
                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={30} /> : <RiMenu3Fill size={30} />}
            </div>
          </div>
        </div>

        {/* Mobile navbar */}
        {menu && (
          <div className="bg-[#eee7f6] text-slate-950   ">
            <ul className="md:hidden flex flex-col h-screen  items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text, isResume }) => (
                <li
                  className="hover:text-[#006FDD] hover:scale-110 duration-200 cursor-pointer"
                  key={id}
                >
                  {isResume ? (
                    <button
                      href="#"
                      onClick={handleResumeDownload}
                      className="border border-blue-700 text-white h-[40px] w-[100px] bg-blue-700 rounded-md hover:bg-white hover:text-black"
                    >
                      {text}
                    </button>
                  ) : (
                    <Link
                      onClick={() => setMenu(!menu)}
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
