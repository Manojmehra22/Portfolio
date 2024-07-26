import React, { useEffect } from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <>
      <hr />
      <footer data-aos="zoom-in" className="py-12 bg-[#ADD8E5]">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/manoj-kumar-13a392289/"
                target="_blank"
              >
                <FaLinkedin
                  size={30}
                  className="hover:scale-150 duration-300 "
                />
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=918700405812&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <FaWhatsappSquare
                  size={30}
                  className="hover:scale-150 duration-300 "
                />
              </a>
            </div>
            <div className="mt-8 border-t border-[#DC143C] pt-8 flex-flex-col  items-center">
              <p className="text-sm ">Created by 💙 @Manoj_kumar</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
