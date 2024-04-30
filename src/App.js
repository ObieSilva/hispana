// GraphQL import
import { useQuery } from "@apollo/client";
import { HOME_QUERIES } from "./wpgraphql/queries";

// Pages import
import Home from "./pages/home/Home";

// Components import
import Banner from "./components/Banner";
import MapEmbed from "./components/MapEmbed";
import Loading from "./components/reusable/Loading";
import ErrorAlert from "./components/reusable/ErrorAlert";
import CookieConsentBar from "./components/CookieConsentBar";
import FeatureBlock from "./pages/home/FeatureBlock";
import UpcomingEvent from "./components/UpcomingEvent";

// Assets import
import familyImage from "./assets/images/family.svg"
import calendar from "./assets/images/calendar.svg"
import ministries from "./assets/images/ministries.svg"

const App = () => {
  const { loading, error, data } = useQuery(HOME_QUERIES);
  const upcomingEventDate = data?.pages?.edges.find(edge => edge.node.home.upComingEvent !== null)?.node.home.upComingEvent;
  const eventDate = upcomingEventDate ? new Date(upcomingEventDate) : null;
  
  if (loading) return <Loading />;
  if (error) return <ErrorAlert error={error} />;

  const topBanner =
    data?.pages?.edges.find(({ node }) => node.home?.topBanner?.displayBanner)
      ?.node?.home?.topBanner || null;

  return (
    <div className="App h-full">
      {topBanner?.displayBanner && (
        <Banner
          information={topBanner.information}
          displayBanner={topBanner.displayBanner}
          bannerType="topBanner"
        />
      )}
      <div>
        <Home data={data} />
        <UpcomingEvent targetDate={eventDate}/>
        <div className="container max-w-lg mx-auto px-4 lg:px-0">
          <span className="block font-bold text-xl text-center pt-12 pb-2">
              En Hispana creemos que la salvación es el mayor tesoro del hombre y se logra por gracia mediante la fe en Jesucristo, a quien todos los hombres deben acercarse en arrepentimiento.
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
        <MapEmbed />
      </div>
      <CookieConsentBar />
    </div>
  );
};

export default App;