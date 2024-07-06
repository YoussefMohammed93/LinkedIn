import { useParams } from "react-router-dom";
import { usersArr } from "./users-data";
import Header from "../main/Header";
export default function UserPage() {
  const { userID } = useParams();
  const user = usersArr.find((user) => user.id === parseInt(userID));

  if (!user) {
    return (
      <div className="text-center my-20">
        <p className="text-white text-5xl">User not found</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="user-container grid grid-cols-12 main-padding mt-[4.25rem] sm:mt-20">
        <div className="col-span-12 md:col-span-7 lg:col-span-8 main-bg rounded-md">
          <div className="user-top relative">
            <div className="user-cover">
              <img
                src={user.userCover}
                className="rounded-md w-full"
                alt={user.userName}
              />
            </div>
            <div className="absolute top-10 sm:top-16 md:top-10 lg:top-16 xl:top-[7.5rem] left-5">
              <img
                src={user.userImg}
                className="rounded-full w-28 h-28 sm:w-36 sm:h-36 md:w-28 md:h-28 lg:w-36 lg:h-36"
                alt={user.userName}
                style={{ border: "4px solid #1b1f23" }}
              />
            </div>
          </div>
          <div className="pt-16 pl-5 pb-6">
            <h1 className="text-3xl font-semibold text-[#ffffffe6]">
              {user.userName}
            </h1>
            <p className="text-lg text-[#ffffffe6] ml-[2px] py-[2px]">
              {user.userJobTitle}
            </p>
            <p className="text-[#ffffff99]">{user.userLocation}</p>
            <p className="text-[#ffffff99]">
              {" "}
              <span className="font-semibold">{user.userConnections}</span>{" "}
              connections
            </p>
            <div className="w-full flex gap-[10px] pt-4">
              <div>
                <button className="text-[#1b1f23] bg-[#71b7fb] hover:bg-[#91c8ff] transition-all duration-200 text-lg font-semibold px-4 py-[2px] rounded-full border-2 border-transparent">
                  Message
                </button>
              </div>
              <div>
                <button
                  className="flex items-center text-[#71b7fb] bg-main hover:bg-[#91c8ff2d] transition-all duration-200 text-lg font-semibold px-4 py-[2px] rounded-full"
                  style={{ border: "2px solid #71b7fb" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 mr-1"
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
              <div>
                <button
                  className="more-btn text-[#ffffff99] bg-main hover:bg-[#eaeaeb2c] hover:text-white transition-all duration-200 text-lg font-semibold px-4 py-[2px] rounded-full"
                  style={{ border: "2px solid #ffffff99" }}
                >
                  More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
