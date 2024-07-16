import React, { useState } from "react";
import flogo from "/flogo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },

    {
      id: 2,
      text: "Resume",
    },
    {
      id: 3,
      text: "Skills",
    },
    {
      id: 4,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-5 bg-[#f9f4e8]">
        <div className="flex justify-between items-center h-16 ">
          <div className="flex">
            <img src={flogo} className="h-12 w-15 rounded-full mt-1" />
            <h1 className="font-semibold text-xl cursor-pointer ">
              Mano<span className="text-[#006FDD] text-2xl">j</span>
              <p className="text-sm">Frontend Developer</p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className=" hover:text-[#006FDD] hover:scale-110 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={30} /> : <RiMenu3Fill size={30} />}
            </div>
          </div>
        </div>

        {/* mobile navbar */}
        {menu && (
          <div className="bg-[#f9f4e8]">
            <ul className="  md:hidden  flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className=" hover:text-[#006FDD] hover:scale-110 duration-200 cursor-pointer"
                  key={id}
                >
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
