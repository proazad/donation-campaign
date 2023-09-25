import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
export const CreateContext = createContext("");
const MainLayout = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.searchtext.value);
    e.target.searchtext.value = "";
  };
  return (
    <>
      <CreateContext.Provider value={search}>
        <Header handleSearch={handleSearch} />
        <Outlet />
      </CreateContext.Provider>
    </>
  );
};

export default MainLayout;
