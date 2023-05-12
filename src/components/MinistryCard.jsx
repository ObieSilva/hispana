const MinistryCard = ({ ministry }) => (
  <div className="card">
    {ministry.image && (
      <div
        className="card-image h-48 md:pb-3/4 bg-cover rounded-t"
        style={{
          backgroundImage: `url(${ministry.image.sourceUrl})`,
        }}
        alt={ministry.image.altText}
      />
    )}
    <div
      className="border border-gray-300 p-4 rounded-b"
      style={{ borderColor: "#cbd5e0" }}
    >
      <div>
        <div className="font-bold mb-2">{ministry.title}</div>
        <div
          className="ministry-description"
          dangerouslySetInnerHTML={{
            __html: ministry.description,
          }}
        />
      </div>
    </div>
  </div>
);

export default MinistryCard;
