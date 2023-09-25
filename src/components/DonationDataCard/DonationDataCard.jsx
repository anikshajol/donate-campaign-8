import PropTypes from "prop-types";
import "./DonationDataCard.css";
import { useNavigate } from "react-router-dom";

const DonationDataCard = ({ data }) => {
  const { id, picture, title, category, category_bg, card_bg, text_button_bg } =
    data;

  const navigate = useNavigate();

  const handleClickToDonate = () => {
    navigate(`/donation-details/${id}`);
  };

  return (
    <>
      <div
        onClick={handleClickToDonate}
        style={{ backgroundColor: card_bg }}
        className="card card-compact cursor-pointer  shadow-xl"
      >
        <figure>
          <img src={picture} alt="" />
        </figure>
        <div className="mt-3 ml-4 ">
          <button
            className="rounded px-2 py-1"
            style={{ color: text_button_bg, backgroundColor: category_bg }}
          >
            {category}
          </button>
          <h2 style={{ color: text_button_bg }} className="title pb-4">
            {title}
          </h2>
        </div>
      </div>
    </>
  );
};

DonationDataCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DonationDataCard;
