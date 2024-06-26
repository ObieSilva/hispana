// GraphQL import
import { useQuery } from "@apollo/client";
import { HOME_QUERIES } from "./wpgraphql/queries";

// Pages import
import Home from "./pages/home/Home";

// Components import
import Banner from "./components/Banner";
import MapEmbed from "./components/MapEmbed";
import Loading from "./components/reusable/Loading";
import ErrorAlert from "./components/reusable/ErrorAlert";
import CookieConsentBar from "./components/CookieConsentBar";

const App = () => {
  const { loading, error, data } = useQuery(HOME_QUERIES);
  const topBanner = data?.pages?.edges.find(({ node }) => node.home?.topBanner?.displayBanner)?.node?.home?.topBanner || null;

  if (loading) return <Loading />;
  if (error) return <ErrorAlert error={error} />;

  return (
    <div className="App h-full">
      {topBanner?.displayBanner && (
        <Banner
          information={topBanner.information}
          displayBanner={topBanner.displayBanner}
          bannerType="topBanner"
        />
      )}
      <div>
        <Home data={data} />
        <MapEmbed />
      </div>
      <CookieConsentBar />
    </div>
  );
};

export default App;