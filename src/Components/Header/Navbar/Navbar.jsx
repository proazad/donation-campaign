import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="navbar-start w-full md:w-inherit flex md:static justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="Donation Campaign"
            className="h-10 lg:h-14"
            draggable="false"
          />
        </Link>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="right-0 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-fit"
          >
            <li>
              <NavLink to="/" className={`text-base lg:text-lg font-bold`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donations"
                className={`text-base lg:text-lg font-bold`}
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={`text-base lg:text-lg font-bold`}
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu-horizontal space-x-5 px-1">
          <li>
            <NavLink to="/" className={`text-base lg:text-lg font-bold`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donations"
              className={`text-base lg:text-lg font-bold`}
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={`text-base lg:text-lg font-bold`}
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
