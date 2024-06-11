import React, { useState, useEffect } from "react";

const NotAvilablePopup = ({ buttonText, buttonIcon, buttonClass }) => {
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
        onClick={toggleModal}
        className={`flex items-center px-3 py-2 rounded-md transition-all duration-200 ${buttonClass}`}
      >
        {buttonIcon}
        <p className="text-[#ffffffbf] text-sm sm:font-semibold ml-2">
          {buttonText}
        </p>
      </button>

      {isModalOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden pt-2 sm:pt-0 pb-0 sm:pb-[6px] h-[calc(100%)] max-h-full bg-black bg-opacity-40"
        >
          <div className="relative p-2 w-full max-w-xl max-h-full">
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
                      Sorry
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
              <div className="bg-[#293138] h-44 sm:h-[150px] w-full relative">
                <div className="media-post-img flex items-center justify-center flex-col absolute left-1/2 top-1/2">
                  <div>
                    <h2 className="text-[#ffffffe5] w-full font-semibold text-center mr-3 mt-4">
                      This option isn't available right now!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotAvilablePopup;
