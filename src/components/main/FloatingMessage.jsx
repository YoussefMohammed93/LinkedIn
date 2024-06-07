import { useState, useEffect, useRef } from "react";
import AvatarImg from "/src/assets/avatar.png";
import FloatingMessageImg from "/src/assets/float-messaging.svg";

export default function FloatingMessaging() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeButton, setActiveButton] = useState("focused");
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [isEditOptionsVisible, setIsEditOptionsVisible] = useState(false);
  const optionsRef = useRef(null);
  const buttonRef = useRef(null);
  const editOptionsRef = useRef(null);

  const handleToggle = (e) => {
    if (
      e.target.closest(".floating-details") ||
      e.target.closest(".floating-edit") ||
      e.target.closest(".edit-options")
    ) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const handleOptionsToggle = (e) => {
    e.stopPropagation();
    setIsOptionsVisible(!isOptionsVisible);
  };

  const handleEditOptionsToggle = (e) => {
    e.stopPropagation();
    setIsEditOptionsVisible(!isEditOptionsVisible);
  };

  const handleClickOutside = (event) => {
    if (
      optionsRef.current &&
      !optionsRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOptionsVisible(false);
    }
  };

  const handleEditClickOutside = (event) => {
    if (
      editOptionsRef.current &&
      !editOptionsRef.current.contains(event.target) &&
      !event.target.closest(".floating-edit")
    ) {
      setIsEditOptionsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleEditClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleEditClickOutside);
    };
  }, []);

  return (
    <nav className="floating-messaging fixed z-40 right-3 bottom-0 transition-transform duration-300 transform">
      <div
        className="main-floating-messaging flex justify-between w-72 main-bg p-2 rounded-t-xl hover:bg-[#293138] transition-all cursor-pointer"
        onClick={handleToggle}
        style={{ border: "1px solid #404040" }}
      >
        <div className="flex items-center">
          <img
            src={AvatarImg}
            alt="Avatar"
            className="w-[36px] h-[36px] rounded-full"
          />
          <h6 className="text-base font-medium text-white ml-3">Messaging</h6>
        </div>
        <div className="floating-options flex items-center relative">
          <button
            ref={buttonRef}
            className="floating-details hover:bg-[#8c8c8c26] p-1 rounded-full"
            onClick={handleOptionsToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(255 255 255/.75)"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
          {isOptionsVisible && (
            <div
              ref={optionsRef}
              className="absolute right-0 bottom-full mb-2 py-1 main-bg rounded-md z-50 w-48"
              style={{ border: "1px solid #404040" }}
              onClick={(e) => e.stopPropagation()} // Prevent event propagation
            >
              <div className="hover:bg-[#8c8c8c26] p-2 text-[#ffffffbf]">
                Manage conversations
              </div>
              <div className="hover:bg-[#8c8c8c26] p-2 text-[#ffffffbf]">
                Messaging settings
              </div>
              <div className="hover:bg-[#8c8c8c26] p-2 text-[#ffffffbf]">
                Set away message
              </div>
            </div>
          )}
          <button
            className="floating-edit hover:bg-[#8c8c8c26] p-1 rounded-full"
            onClick={handleEditOptionsToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(255 255 255/.75)"
              className="size-7 p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
          <button
            className="floating-chevron hover:bg-[#8c8c8c26] p-1 rounded-full"
            onClick={handleToggle}
          >
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="rgb(255 255 255/.75)"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="rgb(255 255 255/.75)"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div
        className={`${
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-300 overflow-hidden`}
      >
        <div
          className="relative bottom-0 main-bg"
          style={{
            borderLeft: "1px solid #404040",
            borderRight: "1px solid #404040",
          }}
        >
          <div className="relative p-2">
            <input
              placeholder="Search Messages"
              className="floating-input w-full bg-[#38434f] py-1 pl-8 text-white rounded-md transition-all duration-300 border-2 border-transparent"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(255 255 255/.75)"
              className="size-5 absolute top-4 left-[14px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="rgb(255 255 255/.75)"
              className="size-5 absolute right-[14px] top-4 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </div>
          <div
            className="floating-messaging-buttons w-full flex items-center justify-between my-5"
            style={{ borderBottom: "1px solid #404040" }}
          >
            <button
              className={`text-base font-medium w-1/2 py-1 hover:bg-[#8c8c8c26] transition-all duration-200 border-transparent border-b-[3px] ${
                activeButton === "focused"
                  ? "border-b-[3px] border-b-[#37c898] text-[#37c898]"
                  : "text-[#ffffffbf]"
              }`}
              onClick={() => handleButtonClick("focused")}
            >
              Focused
            </button>
            <button
              className={`text-base font-medium w-1/2 py-1 hover:bg-[#8c8c8c26] transition-all duration-200 border-transparent border-b-[3px] ${
                activeButton === "other"
                  ? "border-b-[3px] border-b-[#37c898] text-[#37c898]"
                  : "text-[#ffffffbf]"
              }`}
              onClick={() => handleButtonClick("other")}
            >
              Other
            </button>
          </div>
          <div className="flex justify-center pb-5 p-2">
            <img
              src={FloatingMessageImg}
              alt="FloatingMessageImg"
              className="w-[150px] h-[150px]"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#ffffffbf] text-center pb-2">
              No messages yet
            </h3>
          </div>
          <div>
            <h3 className="text-base text-[#ffffffbf] text-center pb-4">
              Reach out and start a conversation <br></br> to advance your
              career
            </h3>
          </div>
          <div className="text-center pb-40">
            <button
              className="floating-messaging-btn text-[#ffffffbf] text-base font-semibold px-4 py-1 rounded-full hover:bg-[#8c8c8c26] transition duration-200"
              style={{ border: "2px solid #ffffffbf" }}
            >
              Send a message
            </button>
          </div>
        </div>
      </div>
      {isEditOptionsVisible && (
        <div
          ref={editOptionsRef}
          className="edit-options absolute right-[20rem] bottom-0 min-h-[300px] py-1 main-bg rounded-md z-50 w-72"
          style={{ border: "1px solid #404040" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ borderBottom: "1px solid #404040" }}>
            <div className="p-2 flex items-center justify-between">
              <h2 className="font-semibold text-white">New message</h2>
              <div
                className="hover:bg-[#8c8c8c26] p-1 rounded-full cursor-pointer"
                onClick={() => setIsEditOptionsVisible(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="rgb(255 255 255/.75)"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-2" style={{ borderBottom: "1px solid #404040" }}>
            <input
              placeholder="Type a name or multiple names"
              className="edit-floating-input main-bg w-full p-2 border-2 border-transparent text-white transition-all duration-300 rounded-full"
            />
          </div>
          <div className="flex items-center gap-1 px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="#9eb5ca"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
            </svg>
            <h3 className="text-[#9eb5ca] text-sm">No results found</h3>
          </div>
        </div>
      )}
    </nav>
  );
}
