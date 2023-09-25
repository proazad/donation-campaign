import { useLocation } from "react-router-dom";
import background from "../../../public/background.jpeg";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
const Header = () => {
  const location = useLocation();
  const path = location.pathname === "/";
  return (
    <header
      className="bg-no-repeat bg-cover bg-slate-200 bg-blend-screen bg-center"
      style={{ backgroundImage: path && `url(${background})` }}
    >
      <Navbar />
      {path && <Banner />}
    </header>
  );
};

export default Header;
