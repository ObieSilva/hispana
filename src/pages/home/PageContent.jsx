//Components import
import Banner from "../../components/AnnouncementBanner";
import PropTypes from 'prop-types';

const PageContent = ({ node }) => {
  const { title, home } = node;
  const { informationBanner } = home;

  return (
    <div className="container max-w-lg mx-auto">
      <div key={title}>
        {informationBanner?.displayBanner && (
          <Banner
            information={informationBanner.information}
            displayBanner={informationBanner.displayBanner}
            bannerType="informationBanner"
          />
        )}
      </div>
    </div>
  );
};

PageContent.propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string.isRequired,
    home: PropTypes.shape({
      informationBanner: PropTypes.object
    }).isRequired
  }).isRequired
};

export default PageContent;
