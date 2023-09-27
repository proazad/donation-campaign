import PiChart from "../../Components/PieChart/PieChart";
import { useLoaderData } from "react-router-dom";
import { getData } from "../../Utility/Utility";
const Statistics = () => {
  const allcamp = useLoaderData();
  const allDonation = getData();
  const data = [
    { name: "Total Donation", value: allcamp.length - allDonation.length },
    { name: "Your Donation", value: allDonation.length },
  ];
  return (
    <div className="container mx-auto justify-center h-[600px]">
      <PiChart data={data}></PiChart>
    </div>
  );
};

export default Statistics;
