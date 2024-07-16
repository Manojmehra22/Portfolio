import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaLinkedin size={24} />
              <FaTwitterSquare size={24} />
              <FaWhatsappSquare size={24} />
            </div>
            <div className="mt-8 border-t border-[#DC143C] pt-8 flex-flex-col items-center">
              <p className="text-sm">Created by 💙 @Manoj_kumar</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
