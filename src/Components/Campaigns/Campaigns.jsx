import Campaign from "../Campaign/Campaign";
import PropTypes from "prop-types";
const Campaigns = ({ campaigns }) => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {campaigns.map((campaign) => (
          <Campaign key={campaign.id} campaign={campaign}></Campaign>
        ))}
      </div>
    </>
  );
};
Campaigns.propTypes = {
  campaigns: PropTypes.array,
};
export default Campaigns;
