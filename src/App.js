import React from "react";
import { useQuery } from "@apollo/client";
import { HOME_QUERIES } from "./wpgraphql/queries";
import Loading from "./components/reusable/Loading";
import Error from "./components/reusable/Error";
import Home from "./pages/home/Home";
import MapEmbed from "./components/MapEmbed";
import PageContent from "./pages/home/PageContent";
import Banner from "./components/Banner";

function App() {
  const { loading, error, data } = useQuery(HOME_QUERIES);
  const pages = data?.pages?.edges || [];
  const topBanner = data?.pages?.edges.find(({ node }) => node.home?.topBanner?.displayBanner)?.node?.home?.topBanner || null;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="App h-full">
      {topBanner?.displayBanner && (
        <Banner
          information={topBanner.information}
          displayBanner={topBanner.displayBanner}
          bannerType="topBanner"
        />
      )}
      <div className="container max-w-lg mx-auto px-4">
        <Home data={pages.map(({ node }) => node)} />
        {pages.map(({ node }) => (
          <PageContent node={node} />
        ))}
        <MapEmbed />
      </div>
    </div>
  );
}

export default App;