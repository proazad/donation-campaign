import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import background from "../../../public/background.jpeg";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
const Header = ({ handleSearch }) => {
  const location = useLocation();
  const path = location.pathname === "/";
  return (
    <header
      className={`bg-no-repeat bg-cover ${path && "bg-slate-200"} bg-blend-screen bg-center`}
      style={{ backgroundImage: path && `url(${background})` }}
    >
      <div className="container mx-auto">
        <Navbar />
      </div>
      {path && <Banner handleSearch={handleSearch} />}
    </header>
  );
};
Header.propTypes = {
  handleSearch: PropTypes.func,
};

export default Header;
