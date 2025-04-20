//Components import
import PropTypes from "prop-types";

const PageContent = ({ node }) => {
  const { title } = node;

  return (
    <div className="container max-w-lg mx-auto">
      <div key={title}>{/* Content will be added here if needed */}</div>
    </div>
  );
};

PageContent.propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string.isRequired,
    home: PropTypes.shape({
      informationBanner: PropTypes.object,
    }).isRequired,
  }).isRequired,
};

export default PageContent;
