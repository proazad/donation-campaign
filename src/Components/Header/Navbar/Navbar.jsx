import { NavLink } from "react-router-dom";
import logo from "../../../../public/Logo.png";
const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-2">
      <div>
        <img src={logo} alt="Donation Campaign" draggable="false" />
      </div>
      <ul className="flex gap-5 font-bold">
        <li>
          <NavLink to="/" className={`text-lg font-bold`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/donation" className={`text-lg font-bold`}>
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
