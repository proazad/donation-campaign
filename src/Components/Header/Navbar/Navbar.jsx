import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/Logo.png";

const Navbar = () => {
  const [navtoggle, setToggler] = useState(false);
  // let hide = navtoggle && "hidden";
  const handleNavbarToggle = (data) => {
    setToggler(data);
  };
  return (
    <nav className="container mx-auto flex items-center justify-between py-4 px-2 xl:px-0">
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="Donation Campaign"
            className="h-10 lg:h-14"
            draggable="false"
          />
        </Link>
      </div>
      <div className="relative">
        {navtoggle === true ? (
          <AiOutlineMenu
            className="text-2xl"
            onClick={() => handleNavbarToggle(!navtoggle)}
          />
        ) : (
          <AiOutlineClose
            className="text-2xl"
            onClick={() => handleNavbarToggle(!navtoggle)}
          />
        )}
        <div className={`absolute right-0`}>
          <ul className="flex flex-col lg:flex-row gap-3 lg:gap-5 font-bold">
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
    </nav>
  );
};

export default Navbar;
