import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { RiFacebookFill, RiInstagramLine, RiYoutubeLine } from "react-icons/ri";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full">
      <nav className="container max-w-lg flex justify-between items-center mx-auto p-3 bg-main rounded-2xl mt-4 px-4">
        <img className="w-40 h-full object-contain" src={logo} alt="Logo" />
        <div className="flex cursor-pointer">
          <FiMenu size="25" onClick={toggleMenu} />
        </div>
      </nav>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-80 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-full lg:w-[400px] bg-main transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col justify-center items-center h-full">
          <div>
            <b>Dirección:</b> 44505 Atwater Dr Ashburn,VA 20147
          </div>
          <div className="p-4 flex gap-4">
            <RiFacebookFill
              className="cursor-pointer border-2 border-black rounded-full p-2 box-content text-[#5d31ce] hover:brightness-50"
              size="25"
              onClick={() =>
                window.open("https://www.facebook.com/HispanaCFC/", "_blank")
              }
            />
            <RiInstagramLine
              className="cursor-pointer border-2 border-black rounded-full p-2 box-content text-[#5d31ce] hover:brightness-50"
              size="25"
              onClick={() =>
                window.open("https://www.instagram.com/cfchispana/", "_blank")
              }
            />
            <RiYoutubeLine
              className="cursor-pointer border-2 border-black rounded-full p-2 box-content text-[#5d31ce] hover:brightness-50"
              size="25"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/user/congregacionhispana",
                  "_blank"
                )
              }
            />
          </div>
        </div>
        <FiX
          className="absolute top-0 right-0 mt-4 mr-4 text-white text-5xl focus:outline-none cursor-pointer"
          size="25"
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};

export default Header;