import { useState } from "react";
import { Link } from "react-router-dom";
import LeftSideBG from "/src/assets/background.jpg";
import AvatarImg from "/src/assets/avatar.png";

export default function LeftSide() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="left-side-container">
      <div className="flex flex-col">
        <div>
          <div className="flex flex-col">
            <div className="relative">
              <div
                className="left-side-bg w-full h-20 bg-center"
                style={{
                  backgroundImage: `url(${LeftSideBG})`,
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              ></div>
              <div className="left-side-img absolute left-1/2 top-7">
                <Link to="/">
                  <img
                    src={AvatarImg}
                    alt="user-avatar"
                    className="w-24 h-24 rounded-full"
                  />
                </Link>
              </div>
            </div>
            <div
              className="main-bg pt-14"
              style={{
                borderBottom: "1px solid rgb(64, 64, 64)",
              }}
            >
              <Link to="/">
                <h2 className="text-center text-[#ffffffe6] text-base font-semibold hover:underline">
                  Youssef Mohammed
                </h2>
              </Link>
              <p className="text-center text-[#ffffff99] text-sm my-2">
                Student at CS
              </p>
            </div>

            <div
              className="main-bg py-3 sm:hidden"
              style={{
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              <div
                className="flex justify-center items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#ffffff99"
                  className={`size-6 transition-transform duration-200 ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  isDropdownOpen ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="mt-2">
                  <div
                    className="main-bg py-3"
                    style={{
                      borderBottom: "1px solid rgb(64, 64, 64)",
                    }}
                  >
                    <Link
                      to="/"
                      className="flex justify-between hover:bg-[#ffffff2e] transition-all duration-150 py-1"
                    >
                      <div className="px-5">
                        <p className="text-[#ffffff99]">Connections</p>
                        <span className="text-[#ffffffe6]">
                          Connect with alumni
                        </span>
                      </div>
                      <div className="px-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="#ffffffe6"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                  <div
                    className="main-bg"
                    style={{
                      borderBottom: "1px solid rgb(64, 64, 64)",
                    }}
                  >
                    <div className="px-5 py-2 hover:bg-[#ffffff2e] transition-all duration-150">
                      <Link to="/" className="left-side-text-link">
                        <h3 className="text-[#ffffff99] text-sm">
                          Strengthen your profile with an AI writing assistant
                        </h3>
                        <h4 className="flex items-center mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#e7a33e"
                            className="size-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                            />
                          </svg>
                          <p className="text-[#ffffffe6] ml-2 text-sm duration-150">
                            Try Premium for EGP0
                          </p>
                        </h4>
                      </Link>
                    </div>
                  </div>
                  <div
                    className="main-bg"
                    style={{
                      borderBottomLeftRadius: "8px",
                      borderBottomRightRadius: "8px",
                    }}
                  >
                    <Link
                      to="/"
                      className="flex items-center px-5 py-3 hover:bg-[#ffffff2e] transition-all duration-150"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#ffffff99"
                          className="size-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="text-[#ffffff99] text-sm font-semibold ml-2">
                        Saved items
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="main-bg py-3 sm:block hidden"
              style={{
                borderBottom: "1px solid rgb(64, 64, 64)",
              }}
            >
              <Link
                to="/"
                className="flex justify-between hover:bg-[#ffffff2e] transition-all duration-150 py-1"
              >
                <div className="px-5">
                  <p className="text-[#ffffff99]">Connections</p>
                  <p className="text-[#ffffffe6] text-xs lg:text-base mt-2">
                    Connect with alumni
                  </p>
                </div>
                <div className="px-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#ffffffe6"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div
              className="main-bg hidden sm:block"
              style={{
                borderBottom: "1px solid rgb(64, 64, 64)",
              }}
            >
              <div className="px-5 py-2 hover:bg-[#ffffff2e] transition-all duration-150">
                <Link to="/" className="left-side-text-link">
                  <h3 className="text-[#ffffff99] text-sm">
                    Strengthen your profile with an AI writing assistant
                  </h3>
                  <h4 className="flex items-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#e7a33e"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                      />
                    </svg>
                    <p className="text-[#ffffffe6] ml-2 text-sm duration-150">
                      Try Premium for EGP0
                    </p>
                  </h4>
                </Link>
              </div>
            </div>
            <div
              className="main-bg hidden sm:block"
              style={{
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              <Link
                to="/"
                className="flex items-center px-5 py-3 hover:bg-[#ffffff2e] transition-all duration-150"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#ffffff99"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-[#ffffff99] text-sm font-semibold ml-2">
                  Saved items
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden sm:block mb-5">
          <div
            className="main-bg p-5 mt-[16px]"
            style={{
              borderBottom: "1px solid rgb(64, 64, 64)",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          >
            <div className="flex flex-col">
              <Link
                to="/"
                className="text-[#71b7fb] font-semibold text-sm w-full hover:underline mb-3"
              >
                Groups
              </Link>
              <Link
                to="/"
                className="text-[#71b7fb] font-semibold text-sm w-full hover:underline mb-3 flex items-center justify-between"
              >
                Events
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ffffff99"
                  className="size-8 hover:bg-[#ffffff2e] p-1 rounded-full duration-150 transition"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="/"
                className="text-[#71b7fb] font-semibold text-sm w-full hover:underline"
              >
                Followed Hashtags
              </Link>
            </div>
          </div>
          <div
            className="main-bg py-5 text-center hover:bg-[#ffffff25] transition-all duration-150"
            style={{
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
            }}
          >
            <Link
              to="/"
              className="w-full h-full font-semibold text-[#ffffffe6]"
            >
              Discover more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
