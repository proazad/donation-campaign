import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/Logo.png";
const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4">
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="Donation Campaign"
            className="h-14"
            draggable="false"
          />
        </Link>
      </div>
      <ul className="flex gap-5 font-bold">
        <li>
          <NavLink to="/" className={`text-lg font-bold`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/donations" className={`text-lg font-bold`}>
            Donation
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" className={`text-lg font-bold`}>
            Statistics
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
