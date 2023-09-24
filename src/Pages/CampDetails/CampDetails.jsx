import { useLoaderData, useParams } from "react-router-dom";
import { getData, saveLocalStorage } from "../../Utility/Utility";
import swal from 'sweetalert';
const CampDetails = () => {
  const camps = useLoaderData();
  const { id } = useParams();
  const currentCamp = camps.find((camp) => camp.id === parseInt(id));
  const { picture, title, description, price } = currentCamp;
  const handleDonation = (Camp) => {
    const localData = getData();
    const isExist = localData.find((local) => local.id === Camp.id);
    if (isExist) {
      swal("Oops!", "already Added", "error");
    } else {
      swal("Hello world!");
      saveLocalStorage(Camp);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="px-16 my-16 space-y-8">
        <div className="relative">
          <img src={picture} className="w-full" alt="" draggable="false" />
          <div className=" py-5 px-5 absolute bottom-0 backdrop-opacity-10 backdrop-invert bg-black/50 w-full">
            <button
              onClick={() => handleDonation(currentCamp)}
              className="bg-[#FF444A] py-2 px-4 rounded-md text-white"
            >
              Donate ${price}
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-base font-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CampDetails;
