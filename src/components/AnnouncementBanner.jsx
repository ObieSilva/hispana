import { FiInfo } from "react-icons/fi";
import PropTypes from "prop-types";

const AnnouncementBanner = ({ information, displayBanner, bannerType }) => {
  if (!displayBanner) {
    return null;
  }

  switch (bannerType) {
    case "topBanner":
      return (
        <div className="top-banner gradient-custom text-black text-center font-semibold text-sm py-3">
          <div dangerouslySetInnerHTML={{ __html: information }} />
        </div>
      );
    case "informationBanner":
      return (
        <div className="information-banner bg-darkShade p-4 border-accent border-2 rounded-md text-black flex gap-2 m-4 lg:my-16">
          <div>
            <FiInfo size="25" className="text-accent" />
          </div>
          <div dangerouslySetInnerHTML={{ __html: information }} />
        </div>
      );
    default:
      return null;
  }
};

AnnouncementBanner.propTypes = {
  information: PropTypes.string.isRequired,
  displayBanner: PropTypes.bool.isRequired,
  bannerType: PropTypes.string.isRequired,
};

export default AnnouncementBanner;
