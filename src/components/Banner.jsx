import React from "react";
import { FiInfo } from "react-icons/fi";

const Banner = ({ information, displayBanner, bannerType }) => {
  const shouldDisplayBanner = Boolean(displayBanner);

  if (!shouldDisplayBanner) {
    return null;
  }

  let bannerUI;

  if (bannerType === "topBanner") {
    bannerUI = (
      <div className="top-banner bg-[#5d31ce] text-[#ffffff] text-center font-medium py-3">
        <div dangerouslySetInnerHTML={{ __html: information }} />
      </div>
    );
  } else if (bannerType === "informationBanner") {
    bannerUI = (
      <div className="information-banner bg-[#f5f5f5] p-4 border border-[#cbd5e0] rounded-md text-black flex gap-2 mt-4" >
        <div>
          <FiInfo size="25"/>
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
