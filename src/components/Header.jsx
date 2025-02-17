// React import
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu, FiInfo } from "react-icons/fi";
import { RiFacebookFill, RiInstagramLine, RiYoutubeLine } from "react-icons/ri";

// Assets import
import logo from "../assets/images/logo.png";
import MainMenu from "./MainMenu";
import MapEmbed from "./MapEmbed";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleBurger = () => setIsBurgerOpen((prev) => !prev);

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
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleBurger}
            className="md:hidden text-2xl"
            aria-label={isBurgerOpen ? "Close menu" : "Open menu"}
          >
            {isBurgerOpen ? <FiX /> : <FiMenu />}
          </button>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <MainMenu />
          </div>
          <button
            onClick={toggleMenu}
            aria-label="More Information"
            className="text-2xl text-white bg-black rounded-full"
          >
            <FiInfo />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black transition-transform duration-300 z-[100] ${
          isBurgerOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <button
          onClick={toggleBurger}
          className="absolute top-4 right-4 text-white text-2xl"
          aria-label="Close menu"
        >
          <FiX size="25" />
        </button>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-xl">
          <MainMenu />
        </div>
      </div>

      {/* Existing Mas Información overlay */}
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
        <FiX
          className="absolute top-0 right-0 mt-4 mr-4 text-black text-5xl focus:outline-none cursor-pointer"
          size="25"
          onClick={toggleMenu}
        />
        <div className="p-4 flex flex-col justify-center items-center h-full">
          <div>
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
          <MapEmbed />
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
      </div>
    </div>
  );
};

export default Header;
