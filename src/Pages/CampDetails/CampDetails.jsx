import { useLoaderData, useParams } from "react-router-dom";
import { getData, saveLocalStorage } from "../../Utility/Utility";
import swal from "sweetalert";
const CampDetails = () => {
  const camps = useLoaderData();
  const { id } = useParams();
  const currentCamp = camps.find((camp) => camp.id === parseInt(id));
  const { picture, title, description, price, text_color } = currentCamp;
  const handleDonation = (Camp) => {
    const localData = getData();
    const isExist = localData.find((local) => local.id === Camp.id);
    if (isExist) {
      swal("Sorry!", "This is Duplicate Donation", "error");
    } else {
      swal("Good job!", "Your Donation is Successfull", "success");
      saveLocalStorage(Camp);
    }
  };
  return (
    <div className="container mx-auto px-2 xl:px-0">
      <div className="xl:px-16 my-6 xl:my-16 space-y-8">
        <div className="relative">
          <img src={picture} className="w-full" alt="" draggable="false" />
          <div className=" py-5 px-5 absolute bottom-0 backdrop-opacity-10 backdrop-invert bg-black/50 w-full">
            <button
            style={{backgroundColor: text_color}}
              onClick={() => handleDonation(currentCamp)}
              className="bg-[#FF444A] py-2 px-4 rounded-md text-white"
            >
              Donate ${price}
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl xl:text-4xl font-bold">{title}</h2>
          <p className="text-base font-normal">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CampDetails;
