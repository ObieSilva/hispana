// React imports
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// GraphQL import
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";

// Styles import
import "./styles/main.css";

// Layout Import
import MainLayout from "./layouts/MainLayout";

// Pages import
import HomePage from "./pages/HomePage";
import PageTemplate from "./pages/templates/PageTemplate";
import SermonsPage from "./pages/SermonsPage";
import MinistriesPage from "./pages/MinistriesPage";

// React ReactToastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Google Tag Manager
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-T4X94KB",
};

TagManager.initialize(tagManagerArgs);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "sermones",
        element: <SermonsPage />,
      },
      {
        path: "ministerios",
        element: <MinistriesPage />,
      },
      {
        path: ":slug",
        element: <PageTemplate />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
      <ToastContainer />
    </ApolloProvider>
  </React.StrictMode>
);
