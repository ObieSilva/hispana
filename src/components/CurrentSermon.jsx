const SermonEmbed = ({ sermonUrl }) => {
  const videoId = new URL(sermonUrl).searchParams.get("v");

  return (
    <iframe
      title="Current Sermon"
      src={`https://www.youtube.com/embed/${videoId}`}
      width="100%"
      height="450"
      allowFullScreen
      style={{ borderRadius: "16px" }}
    />
  );
};

export default SermonEmbed;