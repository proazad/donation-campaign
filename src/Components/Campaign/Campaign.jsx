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
    <div className={`rounded-md space-y-4 bg-[${card_bg_color}]`}>
      <img src={picture} alt="" draggable="false"></img>
      <div className="p-5 space-y-5">
        <Link to={`/details/${id}`}>
          <p
            className={`inline py-2 px-3 rounded-md text-[${text_color}] bg-[${button_bg_color}] text-sm font-medium`}
          >
            {category}
          </p>
        </Link>
        <h2 className={`text-lg font-semibold text-[${text_color}]`}>
          {title}
        </h2>
      </div>
    </div>
  );
};
Campaign.propTypes = {
  campaign: PropTypes.object,
};
export default Campaign;