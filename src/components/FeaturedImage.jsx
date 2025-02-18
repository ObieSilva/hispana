import PropTypes from "prop-types";

const FeaturedImage = ({ sourceUrl, altText, width, height, objectFit }) => {
  return (
    <img src={sourceUrl} alt={altText} style={{ width, height, objectFit }} />
  );
};

FeaturedImage.propTypes = {
  sourceUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  objectFit: PropTypes.string,
};

export default FeaturedImage;
