import { useContext, useEffect, useState } from "react";
import Campaigns from "../../Components/Campaigns/Campaigns";
import { CreateContext } from "../../MainLayout/MainLayout";

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);
  const searchText = useContext(CreateContext);
  const searchResult = campaigns.filter(
    (camp) => camp.category.toLowerCase() === searchText.toLowerCase()
  );
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        if (searchResult.length === 0) {
          setCampaigns(data);
        } else {
          setCampaigns(searchResult);
        }
      });
  }, [searchResult]);

  return (
    <div className="my-16">
      <Campaigns campaigns={campaigns} />
    </div>
  );
};

export default Home;
