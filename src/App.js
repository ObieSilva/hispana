import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { HOME_QUERIES } from "./wpgraphql/queries";
import Loading from "./components/reusable/Loading";
import Error from "./components/reusable/Error";
import Home from "./pages/Home";
import MapEmbed from "./components/MapEmbed";
import SermonEmbed from "./components/CurrentSermon";
import MinistryCard from "./components/MinistryCard";

const App = () => {
  const [data, setData] = useState([]);

  const { loading, error, data: graphData } = useQuery(HOME_QUERIES);

  useEffect(() => {
    if (graphData) {
      setData(graphData.pages.edges);
    }
  }, [graphData]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="App h-full">
      <Home data={data} />
      <div className="container max-w-lg mx-auto px-4">
        {data.map((page, index) => (
          <div key={page.node.title}>
            {page.node.home.currentSermon && (
              <SermonEmbed sermonUrl={page.node.home.currentSermon} />
            )}
            {page.node.home.ministries && (
              <div className="card-container grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
                {page.node.home.ministries.map((ministry) => (
                  <MinistryCard key={ministry.title} ministry={ministry} />
                ))}
              </div>
            )}
          </div>
        ))}
        <MapEmbed />
      </div>
    </div>
  );
};

export default App;