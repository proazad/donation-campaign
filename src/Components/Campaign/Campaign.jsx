import PropTypes from "prop-types";
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
  const handleCampaignDetails = (id) => {
    console.log(id);
  };
  return (
    <div
      onClick={() => handleCampaignDetails(id)}
      className={`rounded-md space-y-4 bg-[${card_bg_color}]`}
    >
      <img src={picture} alt="" draggable="false"></img>
      <div className="p-5 space-y-5">
        <p
          className={`inline py-2 px-3 rounded-md text-[${text_color}] bg-[${button_bg_color}] text-sm font-medium`}
        >
          {category}
        </p>
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
