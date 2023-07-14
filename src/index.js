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
import ReactGA from 'react-ga';

// React ReactToastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:slug",
    element: <PageTemplate />,
  },
]);

ReactGA.initialize('G-C9RS4F5SHD');
ReactGA.pageview(window.location.pathname + window.location.search);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
      <ToastContainer />
    </ApolloProvider>
  </React.StrictMode>
);
