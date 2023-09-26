import { useEffect, useState } from "react";
import Donation from "../../Components/Donation/Donation";
import { getData } from "../../Utility/Utility";

const Donations = () => {
  const [Camps, setCamps] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    const localData = getData();
    if (localData.length > 4) {
      const sliceCamps = localData.slice(0, 4);
      setCamps(sliceCamps);
    } else {
      setCamps(localData);
      setSeeMore(true);
    }
  }, []);

  const handleSeeMore = (isTrue) => {
    setSeeMore(isTrue);
    const localData = getData();
    const newarr = localData.slice(0);
    setCamps(newarr);
  };
  return (
    <div className="my-10 container mx-auto px-2 xl:px-0">
      <div className="flex justify-center items-center">
        <h2 className="text-4xl text-gray-400">
          {Camps.length === 0 && "No Data Found"}
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {Camps.map((Camp) => (
          <Donation key={Camp.id} Camp={Camp}></Donation>
        ))}
      </div>
      <div className="text-center my-10">
        <button
          className={`bg-green-500 py-2 px-5 text-xl text-white font-semibold rounded-md ${
            seeMore && "hidden"
          }`}
          onClick={() => handleSeeMore(true)}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Donations;
