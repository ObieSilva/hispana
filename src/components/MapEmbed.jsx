const MapEmbed = () => {
  return (
    <iframe
      title="CFC Hispana"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.1978256475513!2d-77.46391412407434!3d39.05640567169053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63bfd7939b3d7%3A0x7ace363abaacc59c!2s44505%20Atwater%20Dr%2C%20Ashburn%2C%20VA%2020147!5e0!3m2!1sen!2sus!4v1683668639551!5m2!1sen!2sus"
      width="100%"
      height="250"
      style={{
        border: 0,
        borderRadius: "16px",
        marginTop: "21px",
        marginBottom: "21px",
      }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default MapEmbed;
