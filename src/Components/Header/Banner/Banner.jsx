const Banner = ({ handleSearch }) => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-10 py-32 px-2 xl:px-0">
      <h2 className="text-2xl lg:text-5xl font-bold text-center">
        I Grow By Helping People In Need
      </h2>
      <form onSubmit={handleSearch}>
        <div className="form-control">
          <label className="input-group">
            <input
              type="text"
              placeholder="Search here..."
              name="searchtext"
              required
              className="input input-bordered input-error w-full"
            />
            <button
              type="submit"
              className="btn-error px-2 text-white bg-[#FF444A]"
            >
              Search
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Banner;
