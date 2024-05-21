// React imports
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// GraphQL import
import { ApolloProvider } from '@apollo/client'
import { client } from "./client";

// Styles import
import "./styles/main.css"

// Pages import
import App from "./App";
import PageTemplate from "./pages/templates/PageTemplate";
import UserList from "./pages/UserList";

// React ReactToastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Google Tag Manager
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-T4X94KB',
};

TagManager.initialize(tagManagerArgs);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:slug",
    element: <PageTemplate />,
  },
  {
    path: "/users",
    element: <UserList />
  }
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
