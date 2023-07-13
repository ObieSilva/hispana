// React import
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactGA from 'react-ga';

// GraphQL import
import { useQuery } from "@apollo/client";
import { DEFAULT_PAGE_TEMPLATE } from "../../wpgraphql/queries";

// Components import
import Header from "../../components/Header";
import FeaturedImage from "../../components/FeaturedImage";
import Loading from "../../components/reusable/Loading";
import ErrorAlert from "../../components/reusable/ErrorAlert";
import CookieConsentBar from "../../components/CookieConsentBar";

const PageTemplate = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(DEFAULT_PAGE_TEMPLATE);

  // Google Analytics
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorAlert error={error} />;

  const pages = data?.pages?.edges || [];
  const page = pages.find(({ node }) => node.slug === slug);

  if (!page) {
    return <div>Page not found</div>;
  }

  const { title, content, featuredImage } = page.node;

  return (
    <>
      <Header />
      {featuredImage && (
        <FeaturedImage
          sourceUrl={featuredImage.node.sourceUrl}
          height="400px"
          width="100VW"
          objectFit="cover"
        />
      )}
      <div className="container max-w-lg mx-auto mt-10 px-4">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <CookieConsentBar />
    </>
  );
};

export default PageTemplate;