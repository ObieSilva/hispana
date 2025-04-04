// GraphQL import
import { useQuery } from "@apollo/client";
import { HOME_QUERIES } from "./wpgraphql/queries";

// Pages import
import Home from "./pages/home/Home";

// Components import
import Loading from "./components/reusable/Loading";
import ErrorAlert from "./components/reusable/ErrorAlert";
import CookieNotice from "./components/CookieNotice";
import Header from "./components/Header";
import AnnouncementBanner from "./components/AnnouncementBanner";

const App = () => {
  const { loading, error, data } = useQuery(HOME_QUERIES);
  const topBanner = data?.pages?.edges?.[0]?.node?.home?.topBanner;

  if (loading) return <Loading />;
  if (error) return <ErrorAlert error={error} />;

  return (
    <div className="App h-full">
      <div>
        {topBanner?.displayBanner && (
          <AnnouncementBanner
            information={topBanner.information}
            displayBanner={topBanner.displayBanner}
            bannerType="topBanner"
          />
        )}
        <Header />
        <Home data={data} />
      </div>
      <CookieNotice />
    </div>
  );
};

export default App;
