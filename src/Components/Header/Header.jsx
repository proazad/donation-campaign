import background from "../../../public/background.jpeg";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
const Header = () => {
  return (
    <header
      className="bg-no-repeat bg-cover bg-slate-200 bg-blend-screen bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      <Banner />
    </header>
  );
};

export default Header;
