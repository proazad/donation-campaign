import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Donation = ({ Camp }) => {
  const {
    id,
    picture,
    title,
    category,
    card_bg_color,
    button_bg_color,
    text_color,
    price,
  } = Camp;
  return (
    <div
      className="flex rounded-md space-y-4"
      style={{ backgroundColor: card_bg_color }}
    >
      <div className="w-[200px]">
        <img src={picture} className="h-full" alt="" />
      </div>
      <div className="flex-1 p-5 space-y-4">
        <p
          style={{ backgroundColor: button_bg_color, color: text_color }}
          className="inline py-2 px-3 rounded-md text-sm font-medium"
        >
          {category}
        </p>
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-base font-semibold" style={{ color: text_color }}>
            ${price}
          </p>
        </div>
        <Link to={`/details/${id}`}>
          <button
            style={{ backgroundColor: text_color }}
            className=" text-white text-lg font-semibold rounded-md px-4 py-2"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
Donation.propTypes = {
  Camp: PropTypes.object,
};
export default Donation;
