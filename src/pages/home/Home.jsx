// Components import
import Header from "../../components/Header";
import PageContent from "./PageContent";

const Home = ({ data }) => {
  const pages = data?.pages?.edges || [];

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