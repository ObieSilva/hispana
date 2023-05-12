import React, { useState } from "react";
import logo from "../assets/logo.png";
import HispanaButton from "./reusable/HispanaButton";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <nav className="container max-w-lg flex justify-between items-center mx-auto p-3 bg-main rounded-2xl mt-4 px-4">
        <img className="w-40 h-full object-contain" src={logo} alt="Logo" />
        <div className="flex cursor-pointer">
          <FiMenu size="25" onClick={toggleMenu} />
        </div>
      </nav>
      <div
        className={`fixed top-0 right-0 bottom-0 left-0 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="bg-main h-full w-full p-4">
          <div className="flex flex-col justify-center items-center h-full">
            <HispanaButton title="Facebook" variant="text" url="https://www.facebook.com/HispanaCFC/" />
            <HispanaButton title="Instagram" variant="text" url="https://www.instagram.com/cfchispana/" />
            <HispanaButton title="YouTube" variant="text" url="https://www.youtube.com/user/congregacionhispana" />
          </div>
        </div>
          <FiX className="absolute top-0 right-0 mt-4 mr-4 text-white text-5xl focus:outline-none cursor-pointer" size="25" onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default Header;
