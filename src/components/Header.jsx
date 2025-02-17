// React import
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { RiFacebookFill, RiInstagramLine, RiYoutubeLine } from "react-icons/ri";

// Assets import
import logo from "../assets/images/logo.png";
import MainMenu from "./MainMenu";
import MapEmbed from "./MapEmbed";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);

  const socialMediaLinks = [
    {
      icon: RiFacebookFill,
      url: "https://www.facebook.com/hispanacfc/",
    },
    {
      icon: RiInstagramLine,
      url: "https://www.instagram.com/hispanacfc/",
    },
    {
      icon: RiYoutubeLine,
      url: "https://www.youtube.com/@hispanacfc",
    },
  ];

  return (
    <div className="w-full">
      <nav className="container max-w-lg flex justify-between items-center mx-auto p-3 rounded-2xl px-4">
        <Link to="/">
          <img className="w-40 h-full object-contain" src={logo} alt="Logo" />
        </Link>
        <div className="flex gap-4 font-medium">
          <MainMenu />
          <button onClick={toggleMenu}>Mas Información</button>
        </div>
      </nav>
      <button
        className={`fixed top-0 left-0 w-full h-full bg-[#000000] bg-opacity-80 z-50 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      ></button>
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-full lg:w-[400px] bg-[#ffffff] z-50 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col justify-center items-center h-full">
          <MapEmbed />
          <div className="mt-4">
            <b>Dirección:</b>{" "}
            <a
              href="https://maps.google.com/?q=44505+Atwater+Dr+Ashburn+VA+20147"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              44505 Atwater Dr Ashburn, VA 20147
            </a>
          </div>
          <div className="p-4 flex gap-4">
            {socialMediaLinks.map(({ icon: Icon, url }) => (
              <Icon
                key={url}
                className="cursor-pointer border-2 border-black rounded-full p-2 box-content text-main hover:brightness-50"
                size="25"
                onClick={() => window.open(url, "_blank")}
              />
            ))}
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
