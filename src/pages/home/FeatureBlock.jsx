import { Link } from "react-router-dom";
import { CiCircleChevRight } from "react-icons/ci";

const FeatureBlock = ({ linkTo, title, imageSrc, content, borderColor = "#cbd5e0"}) => {
  return (
    <div className="card-container flex flex-col flex-grow">
      <div className="feature-card flex flex-col flex-grow">
        <div className="card-header border" style={{ borderColor }}>
          <Link
            to={linkTo} className={`w-full h-full flex items-center p-5 justify-between font-bold hover:bg-[#454656] transition-all duration-200 ease-in hover:text-[#ffffff]`}
          >
            {title} <CiCircleChevRight />
          </Link>
        </div>
        <div className="card-content p-5 border flex flex-col flex-grow" style={{ borderColor }}>
          <img className="w-14 h-auto object-contain" src={imageSrc} alt={title} />
          <span className="my-5 block">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeatureBlock;
