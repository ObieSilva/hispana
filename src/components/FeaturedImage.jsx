const FeaturedImage = ({ sourceUrl, altText, width, height, objectFit }) => {
  return (
    <img src={sourceUrl} alt={altText} style={{ width, height, objectFit }} />
  );
};

export default FeaturedImage;