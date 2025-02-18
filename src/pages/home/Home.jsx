// Components import
import PageContent from "./PageContent";
import HeroSwiper from "../../components/HeroSwiper";
import UpcomingEvent from "../../components/UpcomingEvent";
import FeatureBlock from "./FeatureBlock";
import PropTypes from "prop-types";
import familyImage from "../../assets/images/family.svg";
import calendar from "../../assets/images/calendar.svg";
import ministries from "../../assets/images/ministries.svg";

const Home = ({ data }) => {
  const pages = data?.pages?.edges || [];
  const upcomingEventDetails = data?.pages?.edges
    .map((edge) => edge.node.home.eventDetails)
    .find((details) => details && details.eventDate !== null);
  const eventDate = upcomingEventDetails
    ? new Date(upcomingEventDetails.eventDate)
    : null;
  const eventLocation =
    upcomingEventDetails?.eventLocation ?? "Location not specified";
  const eventPageUri = upcomingEventDetails?.eventPage?.uri ?? "#";
  const eventTitle = upcomingEventDetails?.eventPage?.title ?? "Upcoming Event";
  const heroSlides =
    data?.pages?.edges?.find(({ node }) => node.home?.heroSlides)?.node?.home
      ?.heroSlides ?? [];

  return (
    <div className="App h-full">
      <div>
        <HeroSwiper heroSlides={heroSlides} />
        <UpcomingEvent
          eventDate={eventDate}
          eventLocation={eventLocation}
          eventPageUri={eventPageUri}
          eventTitle={eventTitle}
        />
        <div>
          {pages.map(({ node }) => (
            <PageContent key={node.title} node={node} />
          ))}
          <div className="bg-lightShade py-32 border-y border-border">
            <div className="container max-w-lg mx-auto px-4 lg:px-0">
              <span className="block font-bold text-4xl text-center pb-8">
                PIENSAS VISITARNOS?
              </span>
              <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3 mt-4 bg-[#ffffff]">
                <FeatureBlock
                  linkTo="/creencias"
                  title="Nuestras Creencias"
                  imageSrc={familyImage}
                  content="El amor es un atributo clave en el cristianismo. El amor de Dios es un concepto prevalente tanto en el Antiguo Testamento como en el Nuevo Testamento."
                  hoverBackground="#000"
                />
                <FeatureBlock
                  linkTo="/visita"
                  title="Planear una Visita"
                  imageSrc={calendar}
                  content="Planear una visita a nuestra iglesia es un paso hacia una experiencia espiritual y acogedora. Te invitamos a explorar nuestras actividades y unirte a nuestra comunidad de fe y esperanza."
                />
                <FeatureBlock
                  linkTo="/ministerios"
                  title="Ministerios"
                  imageSrc={ministries}
                  content="El amor es un atributo clave en el cristianismo. El amor de Dios es un concepto prevalente tanto en el Antiguo Testamento como en el Nuevo Testamento."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.shape({
    pages: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
};

export default Home;
