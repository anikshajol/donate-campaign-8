import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Donated = ({ donated }) => {
  console.log(donated);
  const {
    picture,
    category,
    title,
    card_bg,
    text_button_bg,
    price,
    category_bg,
    id,
  } = donated;
  return (
    <div>
      <div
        style={{ backgroundColor: card_bg }}
        className="card card-side bg-base-100 shadow-xl"
      >
        <img src={picture} alt={title} />

        <div className="card-body">
          <div className="mt-3  text-center md:text-left ">
            <button
              className="rounded px-2 py-1"
              style={{ color: text_button_bg, backgroundColor: category_bg }}
            >
              {category}
            </button>
          </div>
          <h2 className="card-title">{title}</h2>
          <p className="font-semibold" style={{ color: text_button_bg }}>
            {price}
          </p>

          <div className="card-actions">
            <Link to={`/donation-details/${id}`}>
              <button
                className="rounded px-2 py-1 text-white font-semibold"
                style={{ backgroundColor: text_button_bg }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Donated.propTypes = {
  donated: PropTypes.object.isRequired,
};

export default Donated;
