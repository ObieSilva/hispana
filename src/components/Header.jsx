import { useState } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import { RiFacebookFill, RiInstagramLine, RiYoutubeLine } from "react-icons/ri";
import logo from "../assets/images/logo.png";
import MainMenu from "./MainMenu";
// import MapEmbed from "./MapEmbed";
// import SermonEmbed from "./CurrentSermon";
import PrayerRequestForm from "./PrayerRequestForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleBurger = () => setIsBurgerOpen((prev) => !prev);

  const socialMediaLinks = [
    { icon: RiFacebookFill, url: "https://www.facebook.com/hispanacfc/" },
    { icon: RiInstagramLine, url: "https://www.instagram.com/hispanacfc/" },
    { icon: RiYoutubeLine, url: "https://www.youtube.com/@hispanacfc" },
  ];

  // Mobile Menu Overlay
  const mobileMenuOverlay = (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black transition-transform duration-300 z-[100] ${
        isBurgerOpen ? "translate-y-0" : "-translate-y-full"
      } md:hidden`}
    >
      <button
        onClick={toggleBurger}
        className="absolute top-4 right-4 text-white text-2xl hover:bg-white hover:rounded-full hover:text-black p-2"
        aria-label="Close menu"
      >
        <FiX size="25" />
      </button>
      <div className="flex flex-col items-center justify-center h-full gap-4 text-white text-xl [&_a]:text-white">
        <MainMenu />
        <button
          onClick={() => {
            toggleMenu();
            toggleBurger();
          }}
          className="px-4 py-2 rounded transition-colors duration-200 text-white bg-primary hover:bg-accent focus:outline-none border-none"
          style={{ fontFamily: "inherit", fontSize: "inherit" }}
        >
          Peticiones
        </button>
      </div>
    </div>
  );

  // Más Información Overlay (for notifications / additional info)
  const moreInfoOverlay = (
    <>
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
        } overflow-y-auto`}
      >
        <div className="absolute top-0 right-0 mt-4 mr-4 p-2 rounded-full hover:bg-whiteShade cursor-pointer">
          <FiX className="text-black" size="25" onClick={toggleMenu} />
        </div>
        <div className="p-4 flex flex-col h-full">
          <h6 className="font-medium text-xl mt-10 mb-4">
            Petición de Oración
          </h6>
          <PrayerRequestForm />
          {/* <div className="w-full">
            <h6 className="font-medium text-xl mt-10 mb-4">Ultimo Sermón</h6>
            <SermonEmbed />
          </div> */}
          {/* <div>
            <h6 className="font-medium text-xl mt-10 mb-4">Dirección</h6>
            <MapEmbed />
          </div> */}
          {/* <div className="pb-14">
            <h6 className="font-medium text-xl mt-10 mb-4">
              Mantente Informado
            </h6>
            <div className="flex gap-2">
              {socialMediaLinks.map(({ icon: Icon, url }) => (
                <button
                  key={url}
                  className="p-2 rounded-full bg-whiteShade cursor-pointer hover:text-accent border border-border"
                  onClick={() => window.open(url, "_blank")}
                  aria-label={`Visit our ${Icon.name} page`}
                >
                  <Icon size="20" />
                </button>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );

  return (
    <div className="w-full p-2 border-b border-border">
      <nav className="container max-w-lg flex justify-between items-center mx-auto p-3 rounded-2xl px-4">
        <Link to="/">
          <img className="w-40 h-full object-contain" src={logo} alt="Logo" />
        </Link>
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleBurger}
            className="md:hidden text-2xl"
            aria-label={isBurgerOpen ? "Close menu" : "Open menu"}
          >
            {isBurgerOpen ? <FiX /> : <FiMenu />}
          </button>
          {/* Desktop Menu */}
          <div className="hidden md:flex font-semibold items-center gap-2">
            <MainMenu />
            <button
              onClick={toggleMenu}
              className="mr-2 py-1 rounded transition-colors duration-200 text-secondary hover:text-accent focus:outline-none border-none bg-transparent font-semibold"
              style={{ fontFamily: "inherit", fontSize: "inherit" }}
            >
              Peticiones
            </button>
          </div>
          {/* Social Media Icons - Hidden on Mobile */}
          <div className="hidden md:flex gap-2">
            {socialMediaLinks.map(({ icon: Icon, url }) => (
              <button
                key={url}
                className="p-2 rounded-full bg-whiteShade cursor-pointer hover:text-accent border border-border"
                onClick={() => window.open(url, "_blank")}
                aria-label={`Visit our ${Icon.name} page`}
              >
                <Icon size="20" />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {mobileMenuOverlay}
      {moreInfoOverlay}
    </div>
  );
};

export default Header;
