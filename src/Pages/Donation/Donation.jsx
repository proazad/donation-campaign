const Donation = () => {
  return (
    <div className="my-10 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex bg-[#0052ff26] rounded-md space-y-4">
          <div className="w-[200px]">
            <img src="https://i.ibb.co/HNybchr/Education.png" className="h-full" alt="" />
          </div>
          <div className="flex-1 p-5 space-y-4">
            <p className="inline py-2 px-3 rounded-md text-[#0052FF] bg-[#0052ff33] text-sm font-medium">
              Health
            </p>
            <div>
              <h2 className="text-2xl font-semibold">
                Clean water for children
              </h2>
              <p className="text-base font-semibold text-[#0052FF]">$229</p>
            </div>
            <button className="bg-[#0052FF] text-white text-lg font-semibold rounded-md px-4 py-2">
              View Details
            </button>
          </div>
        </div>

        <div className="flex bg-[#79c23f26] rounded-md space-y-4">
          <div className="w-[200px]">
            <img src="https://i.ibb.co/HNybchr/Education.png" className="h-full" alt="" />
          </div>

          <div className="flext-1 p-5 space-y-4">
            <p className="inline py-2 px-3 rounded-md text-[#0052FF] bg-[#79c23f33] text-sm font-medium">
            Education
            </p>
            <div>
              <h2 className="text-2xl font-semibold">
              Good Education
              </h2>
              <p className="text-base font-semibold text-[#79C23F]">$290</p>
            </div>
            <button className="bg-[#79C23F] text-white text-lg font-semibold rounded-md px-4 py-2">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
