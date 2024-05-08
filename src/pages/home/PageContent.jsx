//Components import
import Banner from "../../components/Banner";

const PageContent = ({ node }) => {
  const { title, home } = node;
  const { informationBanner } = home;

  return (
    <div>
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

export default PageContent;
