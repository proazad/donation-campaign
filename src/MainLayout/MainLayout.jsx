import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import background from "../../public/background.jpeg";
import Banner from "../Components/Header/Banner/Banner";
import Navbar from "../Components/Header/Navbar/Navbar";
import { useState } from "react";
const MainLayout = () => {
  const location = useLocation();
  const path = location.pathname === "/";
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.searchtext.value);
    e.target.searchtext.value = "";
  };
  return (
    <>
      <header
        className={`bg-no-repeat bg-cover ${
          path && "bg-slate-200"
        } bg-blend-screen bg-center`}
        style={{ backgroundImage: path && `url(${background})` }}
      >
        <div className="container mx-auto">
          <Navbar />
        </div>
        {path && <Banner handleSearch={handleSearch} />}
      </header>
      <Outlet />
    </>
  );
};

export default MainLayout;
