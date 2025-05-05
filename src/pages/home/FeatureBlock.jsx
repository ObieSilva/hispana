import { useNavigate } from "react-router-dom";
import { CiCircleChevRight } from "react-icons/ci";
import PropTypes from "prop-types";

const FeatureBlock = ({ linkTo, title, imageSrc, content, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(linkTo);
    }
  };

  return (
    <div className="card-container flex flex-col flex-grow">
      <div className="feature-card flex flex-col flex-grow">
        <div className="card-header border border-border">
          <button
            onClick={handleClick}
            className={`w-full h-full flex items-center p-5 justify-between font-bold hover:bg-primary transition-all duration-200 ease-in hover:text-[#ffffff]`}
          >
            {title} <CiCircleChevRight />
          </button>
        </div>
        <div className="card-content p-5 border border-border flex flex-col flex-grow">
          <img
            className="w-14 h-auto object-contain"
            src={imageSrc}
            alt={title}
          />
          <span className="my-5 block">{content}</span>
        </div>
      </div>
    </div>
  );
};

FeatureBlock.propTypes = {
  linkTo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default FeatureBlock;
