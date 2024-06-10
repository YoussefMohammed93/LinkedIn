import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MainLogo from "/src/assets/linkedin-white.png";
import Avatar from "/src/assets/avatar.png";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="main-header fixed z-20 top-0 left-0 right-0 flex items-center justify-between main-padding main-bg py-2 md:py-0">
      <div className="flex items-center">
        <div className="main-logo">
          <Link to="/">
            <img src={MainLogo} className="w-10 h-10" />
          </Link>
        </div>
        <div className="main-search relative ml-2">
          <button className="search-btn absolute z-40 top-[-12px] left-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              style={{ color: "#bbbcbd" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search"
            className="main-search-input absolute z-30 top-[-20px] h-10 rounded text-white placeholder:text-gray-300 pl-12 w-64 focus:w-80 transition-all duration-300"
            style={{ background: "#38434f" }}
          />
        </div>
      </div>
      <nav className="navbar flex items-center gap-5">
        <div
          className={`${isActive("/Home") ? "active-nav" : ""}`}
          style={
            isActive("/")
              ? {
                  borderBottom: "2px solid white",
                  marginTop: "9px",
                  padding: "3px",
                }
              : {}
          }
        >
          <Link to="/Home" className="nav-link flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
              style={{
                color: isActive("/") ? "white" : "#bbbcbd",
              }}
            >
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
            </svg>
            <span
              className="text-span text-sm"
              style={{
                color: isActive("/") ? "white" : "#bbbcbd",
              }}
            >
              Home
            </span>
          </Link>
        </div>
        <div
          className={`${isActive("/MyNetwork") ? "active-nav" : ""}`}
          style={
            isActive("/MyNetwork")
              ? {
                  borderBottom: "2px solid white",
                  marginTop: "9px",
                  padding: "3px",
                }
              : {}
          }
        >
          <Link to="/MyNetwork" className="nav-link flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
              style={{
                color: isActive("/MyNetwork") ? "white" : "#bbbcbd",
              }}
            >
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.5 0 007.5 2z"></path>
            </svg>
            <span
              className="text-span text-sm"
              style={{
                color: isActive("/MyNetwork") ? "white" : "#bbbcbd",
              }}
            >
              My Network
            </span>
          </Link>
        </div>
        <div className="nav-jobs">
          <Link to="/Home" className="nav-link flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
              style={{ color: "#bbbcbd" }}
            >
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
            <span className="text-span text-sm" style={{ color: "#bbbcbd" }}>
              Jobs
            </span>
          </Link>
        </div>
        <div>
          <Link to="/Home" className="nav-link flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
              style={{ color: "#bbbcbd" }}
            >
              <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
            </svg>
            <span className="text-span text-sm" style={{ color: "#bbbcbd" }}>
              Messaging
            </span>
          </Link>
        </div>
        <div>
          <Link to="/Home" className="nav-link flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="24"
              height="24"
              focusable="false"
              style={{ color: "#bbbcbd" }}
            >
              <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
            </svg>
            <span className="text-span text-sm" style={{ color: "#bbbcbd" }}>
              Notifications
            </span>
          </Link>
        </div>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="nav-link flex flex-col items-center"
          >
            <img src={Avatar} className="w-7 h-7 rounded-full mt-1" />
            <span
              className="text-span text-sm mb-1 flex gap-1"
              style={{ color: "#bbbcbd" }}
            >
              Me
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                  style={{
                    color: "#bbbcbd",
                    marginTop: "1px",
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </span>
          </button>
          {dropdownOpen && (
            <div
              className="dropdown-menu-user right-0 absolute main-bg rounded-md mt-5 md:mt-3"
              style={{ width: "300px" }}
            >
              <button className="block transition duration-100 rounded-md w-full">
                <div
                  className="flex flex-col p-4"
                  style={{ borderBottom: "1px solid #555" }}
                >
                  <div className="flex items-center gap-3 text-start">
                    <div>
                      <img src={Avatar} className="w-16 h-16 rounded-full" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-white">
                        Youssef Mohammed
                      </h2>
                      <p style={{ color: "#bbbcbd" }}>Student at CS</p>
                    </div>
                  </div>
                  <div className="view-btn mt-2 text-blue transition">
                    <Link to="/">
                      <h3 className="w-full py-1 text-blue-300 border-2 border-blue-300 rounded-full opacity-85 hover:opacity-100 transition">
                        View Profile
                      </h3>
                    </Link>
                  </div>
                </div>
              </button>
              <div className="text-start mt-3 pl-4">
                <h2 className="text-lg font-semibold text-white">Account</h2>
                <div className="my-2">
                  <p className="premium flex items-center gap-2 text-sm font-semibold transition-all cursor-pointer">
                    <span className="text-gray hover:underline hover:text-blue-300">
                      <Link to="/">Try Premium for EGP0</Link>
                    </span>
                  </p>
                </div>
                <div>
                  <ul>
                    <li className="text-gray hover:underline cursor-pointer text-sm my-1">
                      <Link to="/">Settings & Privacy</Link>
                    </li>
                    <li className="text-gray hover:underline cursor-pointer text-sm my-1">
                      <Link to="/">Help</Link>
                    </li>
                    <li className="text-gray hover:underline cursor-pointer text-sm my-1">
                      <Link to="/">Language</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="text-start mt-3 pt-2 pl-5"
                style={{ borderTop: "1px solid #555" }}
              >
                <h2 className="text-lg font-semibold text-white">Manage</h2>
                <div>
                  <ul>
                    <li className="text-gray hover:underline cursor-pointer text-sm my-1">
                      <Link to="/">Posts & Activity</Link>
                    </li>
                    <li className="text-gray hover:underline cursor-pointer text-sm my-1">
                      <Link to="/">Job Posting Account</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="text-start mt-3 pt-2 pl-5 pb-2"
                style={{ borderTop: "1px solid #555" }}
              >
                <div>
                  <ul>
                    <li className="text-gray hover:underline cursor-pointer text-sm my-1">
                      <Link to="/">Sign Out</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative md:hidden">
          <button
            onClick={toggleMenu}
            className="nav-link flex flex-col items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              style={{ color: "#bbbcbd" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
          {menuOpen && (
            <div
              className="dropdown-menu right-0 absolute main-bg rounded-md mt-5 flex flex-col p-3"
              style={{ width: "300px" }}
            >
              <div className="flex flex-col mb-3">
                <Link to="/Home" className="nav-link-premium text-sm text-gray hover:underline transition-all mb-4">
                  <div className="nav-jobs-mobile">
                    <span
                      className="text-sm"
                    >
                     ● Jobs
                    </span>
                  </div>
                </Link>
                <Link
                  to="/"
                  className="nav-link-premium text-sm text-gray hover:underline transition-all"
                >
                  ● Try Premium For EGP0
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="premium text-center hidden md:block">
          <Link
            to="/"
            className="nav-link-premium underline text-sm text-gray transition-all"
          >
            Try Premium For <br />
            EGP0
          </Link>
        </div>
      </nav>
    </header>
  );
}
