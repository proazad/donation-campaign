import { getData } from "../../Utility/Utility";
import { useContext, useEffect } from "react";
import { AllCampPirce } from "../../Pages/Statistics/Statistics";

import { PieChart as Pchart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Total Donation", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PieChart() {
  useEffect(() => {
    const allDonation = getData();
    let price = 0;
    allDonation.forEach((camp) => {
      const newprice = camp.price;
      price += newprice;
    });
  }, []);
  const allCampPrice = useContext(AllCampPirce);
  return (
    <Pchart width={400} height={400}>
      <Pie
        data={data}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip></Tooltip>
    </Pchart>
  );
}
