import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavbarLinks, DropdownLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavbarLinks.map((data) => (
              <li key={data.name}>
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                  activeclassname="active"
                >
                  {data.name}
                </Link>
              </li>
            ))}
            <li className="group relative cursor-pointer" ref={dropdownRef}>
              <a
                href="#home"
                className="flex items-center gap-2 h-[70px]"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Hotels
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </a>
              {dropdownOpen && (
                <div className="absolute left-0 z-50 w-[230px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul className="space-y-3">
                    {DropdownLinks.map((data) => (
                      <li key={data.name}>
                        <Link
                          to={data.link}
                          onClick={() => {
                            setShowMenu(false);
                            setDropdownOpen(false);
                          }}
                          className="inline-block w-full rounded-md p-2 hover:bg-green-100 whitespace-nowrap"
                          activeclassname="active"
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;