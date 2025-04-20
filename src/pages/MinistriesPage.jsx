// src/pages/MinistriesPage.jsx
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MINISTRIES } from "../wpgraphql/queries";

// Components import
import ContentCard from "../components/ContentCard";
import Loading from "../components/reusable/Loading";
import ErrorAlert from "../components/reusable/ErrorAlert";

const MinistriesPage = () => {
  const { loading, error, data } = useQuery(GET_MINISTRIES);

  if (loading) return <Loading />;
  if (error) return <ErrorAlert error={error} />;

  const ministries = data?.ministries?.nodes || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Ministerios</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {ministries.map((ministry) => (
          <ContentCard
            key={ministry.id}
            title={ministry.title}
            excerpt={ministry.excerpt}
            featuredImage={ministry.featuredImage?.node}
            leader={ministry.ministryDetails?.leader}
            meetingTime={ministry.ministryDetails?.meetingTime}
            isActive={ministry.ministryDetails?.isActive}
            linkTo={`/ministerios/${ministry.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MinistriesPage;
