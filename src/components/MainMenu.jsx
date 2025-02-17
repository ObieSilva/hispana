import React from "react";
import { useQuery } from "@apollo/client";
import { MAIN_MENU } from "../wpgraphql/queries";

const MainMenu = () => {
  const { data } = useQuery(MAIN_MENU);

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
            <a href={node.uri}>{node.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
