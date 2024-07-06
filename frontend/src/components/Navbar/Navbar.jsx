import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import Logo from "../../assets/logo2.png";
import ResponsiveMenu from "./ResponsiveMenu";

export const NavbarLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Best Places", link: "/best-places" },
];

export const DropdownLinks = [
  { name: "Hotel Suvidha deluxe", link: "/suvidha" },
  { name: "Hotel Le Grace", link: "/grace" },
  { name: "Hotel King Plaza", link: "/king" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container py-[2px] hidden sm:block">
          <div className="flex items-center justify-between">
            <p className="text-sm">20% off on your next booking</p>
            <p>Call us at: +91-89410 00584</p>
          </div>
        </div>
      </div>
      <div className="container py-3 sm:py-0 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 text-2xl sm:text-2xl font-bold text-center sm:text-left">
            <img
              src={Logo}
              alt="Logo"
              className="h-12 sm:h-16"
              style={{ maxWidth: "300px" }} // Adjust max-width as needed
            />
          </div>
          <div className="hidden md:flex md:items-center md:gap-6">
            <ul className="flex items-center gap-6">
              {NavbarLinks.map((link) => (
                <li key={link.name} className="py-4">
                  <NavLink
                    to={link.link}
                    activeClassName="active"
                    className="hover:text-blue-500 transition-all duration-300"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="group relative cursor-pointer">
                <Link
                  to="/#home"
                  className="flex h-[72px] items-center gap-[2px]"
                >
                  Hotels{" "}
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </Link>
                <div className="absolute left-0 z-50 hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md">
                  <ul className="space-y-3">
                    {DropdownLinks.map((data) => (
                      <li key={data.name}>
                        <Link
                          className="inline-block w-full rounded-md p-2 hover:bg-green-100"
                          to={data.link}
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 transition-all duration-600 text-white px-3 py-1 rounded-full hidden md:block"
              onClick={handleOrderPopup}
            >
              Book Now
            </button>
            <div className="md:hidden block">
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Pass DropdownLinks as a prop to ResponsiveMenu */}
      <ResponsiveMenu
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        dropdownLinks={DropdownLinks}
      />
    </nav>
  );
};

export default Navbar;
