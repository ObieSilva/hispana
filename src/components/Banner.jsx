import { FiInfo } from "react-icons/fi";

const Banner = ({ information, displayBanner, bannerType }) => {
  const shouldDisplayBanner = Boolean(displayBanner);

  if (!shouldDisplayBanner) {
    return null;
  }

  let bannerUI;

  if (bannerType === "topBanner") {
    bannerUI = (
      <div className="top-banner gradient-custom text-black text-center font-semibold text-sm py-3">
        <div dangerouslySetInnerHTML={{ __html: information }} />
      </div>
    );
  } else if (bannerType === "informationBanner") {
    bannerUI = (
      <div className="information-banner bg-darkShade p-4 border-accent border-2 rounded-md text-white flex gap-2 m-4 lg:my-16">
        <div>
          <FiInfo size="25" className="text-accent"/>
        </div>
        <div dangerouslySetInnerHTML={{ __html: information }} />
      </div>
    );
  } else {
    bannerUI = null;
  }

  return bannerUI;
};

export default Banner;