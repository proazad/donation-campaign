import { useEffect, useState } from "react";
import Campaigns from "../../Components/Campaigns/Campaigns";
const Home = () => {
  const [campaigns, setCampaigns] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCampaigns(data));
  }, []);
  return (
    <div className="my-16">
      <Campaigns campaigns={campaigns} />
    </div>
  );
};

export default Home;
