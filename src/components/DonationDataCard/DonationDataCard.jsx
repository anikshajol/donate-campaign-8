import PropTypes from "prop-types";

const DonationDataCard = ({ data }) => {
  const { picture, title, category, category_bg, card_bg, text_button_bg } =
    data;
  return (
    <div>
      <div
        style={{ backgroundColor: card_bg }}
        className="card card-compact  shadow-xl"
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
          <h2 style={{ color: text_button_bg }} className="card-title pb-4">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

DonationDataCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DonationDataCard;
