// Components import
import Header from "../../components/Header";
import PageContent from "./PageContent";
import HeroSwiper from "../../components/HeroSwiper";
import UpcomingEvent from "../../components/UpcomingEvent";
import FeatureBlock from "./FeatureBlock";

import familyImage from "../../assets/images/family.svg";
import calendar from "../../assets/images/calendar.svg";
import ministries from "../../assets/images/ministries.svg";

const Home = ({ data }) => {
  const pages = data?.pages?.edges || [];
  const upcomingEventDetails = data?.pages?.edges.map((edge) => edge.node.home.eventDetails).find((details) => details && details.eventDate !== null);
  const eventDate = upcomingEventDetails ? new Date(upcomingEventDetails.eventDate) : null;
  const eventLocation = upcomingEventDetails ? upcomingEventDetails.eventLocation : "Location not specified";
  const eventPageUri = upcomingEventDetails && upcomingEventDetails.eventPage ? upcomingEventDetails.eventPage.uri : "#";
  const eventTitle = upcomingEventDetails?.eventPage ? upcomingEventDetails.eventPage.title : "Upcoming Event";
  const heroSlides = data?.pages?.edges.find(({ node }) => node.home?.heroSlides)?.node.home.heroSlides || [];

  return (
    <div className="App h-full">
      <Header />
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
          <div className="bg-[#f5f5f5] py-16">
            <div className="container max-w-lg mx-auto px-4 lg:px-0">
              <span className="block font-bold text-xl text-center pb-2">
                En Hispana creemos que la salvación es el mayor tesoro del hombre
                y se logra por gracia mediante la fe en Jesucristo, a quien todos
                los hombres deben acercarse en arrepentimiento.
              </span>
              <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
                <FeatureBlock
                  linkTo="/creencias"
                  title="Nuestras creencias"
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

export default Home;