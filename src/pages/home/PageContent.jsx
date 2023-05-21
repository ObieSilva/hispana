//Components import
import SermonEmbed from "../../components/CurrentSermon";
import Banner from "../../components/Banner";
import Ministries from "./Ministries";

const PageContent = ({ node }) => {
  const { title, home } = node;
  const { currentSermon, ministries, informationBanner } = home;

  return (
    <div key={title}>
      {currentSermon && <SermonEmbed sermonUrl={currentSermon} />}
      {informationBanner?.displayBanner && (
        <Banner
          information={informationBanner.information}
          displayBanner={informationBanner.displayBanner}
          bannerType="informationBanner"
        />
      )}
      {ministries && <Ministries ministries={ministries} />}
    </div>
  );
};

export default PageContent;