import { useState, useEffect } from "react";
import MediaImg from "/src/assets/float-messaging.svg";

const MediaPostPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <button
        className="flex items-center px-0 sm:px-3 py-2 rounded-md transition-all duration-200 hover:bg-[#8c8c8c26]"
        onClick={toggleModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#71b7fb"
          className="size-6 sm:size-7"
        >
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-[#ffffff99] text-sm sm:font-semibold ml-2">Media</p>
      </button>

      {isModalOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden pt-2 sm:pt-0 pb-0 sm:pb-[6px] h-[calc(100%)] max-h-full bg-black bg-opacity-40"
        >
          <div className="relative p-2 w-full max-w-5xl max-h-full">
            <div className="rounded-lg" style={{ border: "1px solid #404040" }}>
              <div
                className="main-bg p-4"
                style={{
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  borderBottom: "1px solid #404040",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[#ffffffe6] text-lg font-semibold">
                      Editor
                    </h3>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={toggleModal}
                      className="text-[#ffffff99] bg-transparent hover:bg-[#ffffff1d] rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                      data-modal-hide="default-modal"
                    >
                      <svg
                        className="w-[14px] h-[14px]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#293138] h-96 sm:h-[500px] w-full relative">
                <div className="media-post-img flex items-center justify-center flex-col absolute left-1/2 top-1/2">
                  <img src={MediaImg} alt="media-img" className="mr-5" />
                  <div>
                    <h2 className="text-[#ffffffe5] text-lg sm:text-xl font-semibold text-center mr-3 mt-4">
                      Select files to begin
                    </h2>
                    <p className="text-[#ffffff99] text-sm mt-2 text-center">
                      Share images or a single video in your post.
                    </p>
                    <div className="text-center mt-4">
                      <button className="bg-[#71b7fb] text-[#293138] font-semibold text-base rounded-full px-3 py-1 hover:bg-[#8cc5ff] transition-all duration-150">
                        Upload from computer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="main-bg p-4 flex justify-end"
                style={{
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                }}
              >
                <div>
                  <button className="bg-[#373a3d] text-[#ffffff99] px-4 py-1 rounded-full cursor-not-allowed">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaPostPopup;
