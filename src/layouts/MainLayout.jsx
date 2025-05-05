import React from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { HOME_QUERIES } from "../wpgraphql/queries";

// Components import
import Header from "../components/Header";
import AnnouncementBanner from "../components/AnnouncementBanner";
import CookieNotice from "../components/CookieNotice";
import Loading from "../components/reusable/Loading";
import ErrorAlert from "../components/reusable/ErrorAlert";

const MainLayout = () => {
  const { loading, error, data } = useQuery(HOME_QUERIES);
  const topBanner = data?.pages?.edges?.[0]?.node?.home?.topBanner;

  if (loading) return <Loading />;
  if (error) return <ErrorAlert error={error} />;

  return (
    <div className="App h-full flex flex-col min-h-screen">
      {/* Top Announcement Banner */}
      {topBanner?.displayBanner && (
        <AnnouncementBanner
          information={topBanner.information}
          displayBanner={topBanner.displayBanner}
          bannerType="topBanner"
        />
      )}

      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Cookie Notice */}
      <CookieNotice />
    </div>
  );
};

export default MainLayout;
