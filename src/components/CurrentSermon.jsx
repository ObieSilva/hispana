import { useQuery } from "@apollo/client";
import { HOME_QUERIES } from "../wpgraphql/queries";

const SermonEmbed = () => {
  const { data } = useQuery(HOME_QUERIES);
  const sermonUrl = data?.pages?.edges?.[0]?.node?.home?.currentSermon;

  if (!sermonUrl) {
    return null;
  }

  const videoId = new URL(sermonUrl).searchParams.get("v");
  return (
    <iframe
      title="Current Sermon"
      src={`https://www.youtube.com/embed/${videoId}`}
      width="360"
      height="150"
      allowFullScreen
      style={{ borderRadius: "16px" }}
    />
  );
};

export default SermonEmbed;
