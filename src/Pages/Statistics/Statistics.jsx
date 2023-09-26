import { createContext } from "react";
import PiChart from "../../Components/PieChart/PieChart";
import { useLoaderData } from "react-router-dom";
export const AllCampPirce = createContext();
const Statistics = () => {
  const allcamp = useLoaderData();
  let allprice = 0;
  allcamp.forEach((item) => {
    const newPrice = item.price;
    allprice += newPrice;
  });
  return (
    <div>
      <AllCampPirce.Provider value={allprice}>
        <PiChart allprice={allprice}></PiChart>
      </AllCampPirce.Provider>
    </div>
  );
};

export default Statistics;
