import { useEffect, useState } from "react";
import Campaign from "../Campaign/Campaign";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCampaigns(data));
  }, []);
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

export default Campaigns;
