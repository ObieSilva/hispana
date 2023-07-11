// Components import
import MinistryCard from "../../components/MinistryCard";

const Ministries = ({ ministries }) => {
  return (
    <div className="card-container grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
      {ministries.map((ministry) => (
        <MinistryCard key={ministry.description} ministry={ministry} />
      ))}
    </div>
  );
};

export default Ministries;