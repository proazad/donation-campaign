const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-10 py-32">
      <h2 className="text-5xl font-bold">I Grow By Helping People In Need</h2>
      <div className="form-control">
        <label className="input-group">
          <input
            type="text"
            placeholder="Search here..."
            className="input input-bordered input-error"
          />
          <span className="btn-error text-white bg-[#FF444A]">Search</span>
        </label>
      </div>
    </div>
  );
};

export default Banner;
