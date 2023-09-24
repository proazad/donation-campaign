import PropTypes from "prop-types";
const Donation = ({ Camp }) => {
  const {
    picture,
    title,
    category,
    card_bg_color,
    button_bg_color,
    text_color,
    price,
  } = Camp;
  return (
    <div className={`flex bg-[${card_bg_color}] rounded-md space-y-4`}>
      <div className="w-[200px]">
        <img src={picture} className="h-full" alt="" />
      </div>
      <div className="flex-1 p-5 space-y-4">
        <p
          className={`inline py-2 px-3 rounded-md text-[${text_color}] bg-[${button_bg_color}] text-sm font-medium`}
        >
          {category}
        </p>
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className={`text-base font-semibold text-[${text_color}]`}>
            ${price}
          </p>
        </div>
        <button className="bg-[#0052FF] text-white text-lg font-semibold rounded-md px-4 py-2">
          View Details
        </button>
      </div>
    </div>
  );
};
Donation.propTypes = {
  Camp: PropTypes.object,
};
export default Donation;
