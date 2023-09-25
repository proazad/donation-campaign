import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Campaign = ({ campaign }) => {
  const {
    id,
    picture,
    title,
    category,
    card_bg_color,
    button_bg_color,
    text_color,
  } = campaign;
  return (
    <div
      className="rounded-md space-y-4"
      style={{ backgroundColor: card_bg_color }}
    >
      <Link to={`/details/${id}`}>
        <img
          src={picture}
          alt=""
          className="w-full h-52 rounded-t-md"
          draggable="false"
        ></img>
        <div className="p-5 space-y-5">
          <p
            style={{ backgroundColor: button_bg_color, color: text_color }}
            className="inline py-2 px-3 rounded-md text-sm font-medium"
          >
            {category}
          </p>
          <h2 className="text-lg font-semibold" style={{ color: text_color }}>
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};
Campaign.propTypes = {
  campaign: PropTypes.object,
};
export default Campaign;
