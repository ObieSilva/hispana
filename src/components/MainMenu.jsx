import React from "react";
import { useQuery } from "@apollo/client";
import { MAIN_MENU } from "../wpgraphql/queries";
import { Link, useLocation } from "react-router-dom";

const MainMenu = () => {
  const { data } = useQuery(MAIN_MENU);
  const location = useLocation();

  const menuNodes = data?.menus?.nodes || [];
  const mainMenu = menuNodes.find((menu) => menu.name === "Main Menu");

  if (!mainMenu) {
    return <p>Main Menu not found.</p>;
  }

  const menuItems = mainMenu.menuItems.edges;

  return (
    <nav>
      <ul className="flex flex-col items-center gap-2 md:flex-row md:gap-2">
        {menuItems.map(({ node }) => (
          <li key={node.label}>
            <Link 
              to={node.uri}
              className={`transition-colors duration-200 ${
                location.pathname === node.uri 
                  ? "text-primary" 
                  : "text-secondary hover:text-accent"
              }`}
            >
              {node.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
