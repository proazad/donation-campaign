import { useEffect, useState } from "react";
import Donation from "../../Components/Donation/Donation";
import { getData } from "../../Utility/Utility";

const Donations = () => {
  const [Camps, setCamps] = useState([]);
  const [seeMore, setSeeMore] = useState(false);
  useEffect(() => {
    const localData = getData();
    setCamps(localData);
  }, []);
  
  const handleSeeMore = (isTrue) => {
    if(Camps.length > 4){
      console.log("Hello")
    }else{
      console.log("World");
    }
  };
  return (
    <div className="my-10 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {Camps.map((Camp) => (
          <Donation key={Camp.id} Camp={Camp}></Donation>
        ))}
      </div>
      <div className="text-center my-10">
        <button
          className={`bg-green-500 py-2 px-5 text-xl text-white font-semibold rounded-md ${seeMore && 'hidden'}`}
          onClick={() => handleSeeMore(!seeMore)}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Donations;
