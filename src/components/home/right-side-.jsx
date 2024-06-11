import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import linkedInLogo from "/src/assets/linkedin-white.png";
import OsamaElzeroImg from "/src/assets/osama-elzero.jpeg";
import GhareebElshaikhImg from "/src/assets/ghareeb-elshaikh.jpeg";
import MahmoudAdelImg from "/src/assets/mahmoud-adel.jpg";

const RightSide = () => {
  const [showInfo, setShowInfo] = useState(false);
  const infoBoxRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleInfo = () => setShowInfo(!showInfo);

  const handleClickOutside = (event) => {
    if (
      infoBoxRef.current &&
      !infoBoxRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setShowInfo(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const users = [
    {
      name: "Osama Elzero",
      title: "Nothing Is Everything",
      imagePath: OsamaElzeroImg,
    },
    {
      name: "Ghareeb Elshaikh",
      title: "Software Engineer",
      imagePath: GhareebElshaikhImg,
    },
    {
      name: "Mahmoud Adel",
      title: "FullStack Developer",
      imagePath: MahmoudAdelImg,
    },
  ];

  return (
    <div>
      <div className="main-bg rounded-lg p-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[#ffffffe6] text-lg font-semibold">
            Add to your feed
          </h2>
          <button
            ref={buttonRef}
            aria-label="More Info"
            className="relative"
            onClick={toggleInfo}
          >
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
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </button>
          {showInfo && (
            <div
              ref={infoBoxRef}
              className="info-box absolute z-40 right-32 top-32 main-bg p-3 rounded shadow-2xl"
              style={{ border: "1px solid #404040" }}
            >
              <h3 className="text-gray max-w-48">
                Follow things that interest you to personalize your feed
                <span className="text-blue hover:underline cursor-pointer">
                  Learn more.
                </span>
              </h3>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 mt-4 pb-2">
          {users.map((user) => (
            <div key={user.name}>
              <Link
                to={`users.html?user=${user.name}`}
                className="flex items-center gap-3"
              >
                <div className="right-side-users-image">
                  <img
                    src={`${user.imagePath}`}
                    alt="right-side-user-image"
                    width="50px"
                    height="50px"
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-base xl:text-lg font-medium text-white">
                    {user.name}
                  </h2>
                  <p className="text-xs xl:text-sm text-[#ffffff99]">
                    {user.title}
                  </p>
                </div>
              </Link>
              <div className="user-follow pt-3 pl-16">
                <button
                  className="text-md font-semibold text-[#ffffff99] hover:text-white transition-all flex items-center gap-2 rounded-full px-2 py-[2px]"
                  style={{ border: "2px solid #ffffff99" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Follow
                </button>
              </div>
            </div>
          ))}
          <div className="user-recommendations">
            <Link
              to="network.html"
              className="text-[#ffffff99] text-xs xl:text-base flex items-center gap-2 font-semibold p-2 rounded-md hover:text-white transition-all duration-150 hover:bg-[#8c8c8c26]"
            >
              View All Recommendations
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 xl:size-6 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <h3 className="text-white text-sm font-semibold flex items-center mt-4 mx-1 mb-5">
        <span className="cursor-default text-xs xl:text-sm">Linked</span>
        <img
          src={linkedInLogo}
          alt="linkedin-icon"
          className="ml-1 w-3 h-3 xl:w-4 xl:h-4"
        />
        <p className="text-xs xl:text-sm font-medium text-gray ml-1">
          LinkedIn Corporation © 2024
        </p>
      </h3>
    </div>
  );
};

export default RightSide;
