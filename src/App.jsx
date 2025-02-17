import { useQuery } from "@apollo/client";
import { HOME_QUERIES } from "./wpgraphql/queries";
import { Routes, Route } from "react-router-dom";
// ... other imports

const App = () => {
  const { data } = useQuery(HOME_QUERIES);
  const topBanner = data?.pages?.edges?.[0]?.node?.home?.topBanner;

  return (
    <>
      {topBanner?.displayBanner && (
        <div className="bg-primary text-white text-center py-2 px-4">
          {topBanner.information}
        </div>
      )}
      <Routes>
        {/* your existing routes */}
      </Routes>
    </>
  );
};

export default App;
