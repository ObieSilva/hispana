import React from "react";
import { useQuery } from "@apollo/client";
import { HOME_QUERIES } from "../wpgraphql/queries";

// Pages import
import Home from "./home/Home";

// Components import
import Loading from "../components/reusable/Loading";
import ErrorAlert from "../components/reusable/ErrorAlert";

const HomePage = () => {
  const { loading, error, data } = useQuery(HOME_QUERIES);

  if (loading) return <Loading />;
  if (error) return <ErrorAlert error={error} />;

  return <Home data={data} />;
};

export default HomePage;
