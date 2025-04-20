// src/pages/SermonsPage.jsx
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SERMONS } from "../wpgraphql/queries";

// Components import
import ContentCard from "../components/ContentCard";
import Loading from "../components/reusable/Loading";
import ErrorAlert from "../components/reusable/ErrorAlert";

const SermonsPage = () => {
  const { loading, error, data } = useQuery(GET_SERMONS);

  if (loading) return <Loading />;
  if (error) return <ErrorAlert error={error} />;

  const sermons = data?.sermons?.nodes || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sermones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {sermons.map((sermon) => (
          <ContentCard
            key={sermon.id}
            title={sermon.title}
            excerpt={sermon.excerpt}
            featuredImage={sermon.featuredImage?.node?.sourceUrl}
            date={sermon.sermonDetails?.sermonDate}
            leader={sermon.sermonDetails?.speaker}
            linkTo={sermon.sermonDetails?.youtubeUrl}
            isSermon={true}
          />
        ))}
      </div>
    </div>
  );
};

export default SermonsPage;
