// Components import
import { useEffect } from "react";
import Header from "../../components/Header";
import PageContent from "./PageContent";
import ReactGA from 'react-ga';

const Home = ({ data }) => {
  const pages = data?.pages?.edges || [];

  // Google Analytics
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="App h-full">
      <Header />
      <div className="container max-w-lg mx-auto">
        {pages.map(({ node }) => (
          <PageContent key={node.title} node={node} />
        ))}
      </div>
    </div>
  );
};

export default Home;