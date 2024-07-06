import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Tooltip } from "@material-tailwind/react";
import NotAvilablePopup from "./not-avilable-popup";
import AvatarImg from "/src/assets/avatar.png";
import LikeIcon from "/src/assets/Like-Icon.svg";
import HeartIcon from "/src/assets/Heart-Icon.svg";
import CareIcon from "/src/assets/Care-Icon.svg";
import LikeIcon1 from "/src/assets/like-img-1.svg";
import HeartIcon1 from "/src/assets/heart-img-1.svg";
import CareIcon1 from "/src/assets/support-img-1.svg";
import FunnyIcon from "/src/assets/funny-icon.svg";
import InsightfulIcon from "/src/assets/Iinsightful-icon.svg";
import CelebrateIcon from "/src/assets/celebrate-icon.svg";

export default function Post(props) {
  const [reaction, setReaction] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [showRepostNotification, setShowRepostNotification] = useState(false);

  function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="text-[#ffffff99] bg-transparent hover:bg-[#ffffff1d] rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-7 transition-all duration-200"
          >
            <path
              fillRule="evenodd"
              d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {isOpen && (
          <div
            className="absolute right-0 top-10 mb-2 py-2 main-bg rounded-md z-50 w-72 shadow-2xl"
            style={{ border: "1px solid rgb(64, 64, 64)" }}
          >
            <button className="hover:bg-[#8c8c8c26] flex items-center w-full p-2 sm:p-3 text-[#ffffffe1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
              Save
            </button>
            <button className="hover:bg-[#8c8c8c26] flex items-center w-full p-3 text-[#ffffffe1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
              Copy link to post
            </button>
            <button className="hover:bg-[#8c8c8c26] flex items-center w-full p-3 text-[#ffffffe1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
              Embded this post
            </button>
            <button className="hover:bg-[#8c8c8c26] flex items-center w-full p-3 text-[#ffffffe1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
              Not interested
            </button>
            <button className="hover:bg-[#8c8c8c26] flex items-center w-full p-3 text-[#ffffffe1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 mr-3"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
              Unfollow {props.userName}
            </button>
            <button className="hover:bg-[#8c8c8c26] flex items-center w-full p-3 text-[#ffffffe1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 mr-3"
              >
                <path
                  fillRule="evenodd"
                  d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
                  clipRule="evenodd"
                />
              </svg>
              Report post
            </button>
          </div>
        )}
      </div>
    );
  }

  useEffect(() => {
    const savedReaction = localStorage.getItem(`userReaction-${props.id}`);
    if (savedReaction) {
      setReaction(savedReaction);
    }
  }, [props.id]);

  const handleReactionClick = (newReaction) => {
    if (reaction === newReaction) {
      setReaction("");
      localStorage.removeItem(`userReaction-${props.id}`);
    } else {
      setReaction(newReaction);
      localStorage.setItem(`userReaction-${props.id}`, newReaction);
    }
  };

  const renderIcon = () => {
    switch (reaction) {
      case "like":
        return <img src={LikeIcon1} alt="like" className="size-6" />;
      case "celebrate":
        return <img src={CelebrateIcon} alt="celebrate" className="size-6" />;
      case "support":
        return <img src={CareIcon1} alt="support" className="size-6" />;
      case "love":
        return <img src={HeartIcon1} alt="love" className="size-6" />;
      case "insightful":
        return <img src={InsightfulIcon} alt="insightful" className="size-6" />;
      case "funny":
        return <img src={FunnyIcon} alt="funny" className="size-6" />;
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#ffffff99"
            className="size-5 sm:size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
            />
          </svg>
        );
    }
  };

  const handleDelete = () => {
    setIsDeleted(true);
  };

  const handleUndo = () => {
    setIsDeleted(false);
  };

  const handleToggleComments = () => {
    setShowComments((prevShowComments) => !prevShowComments);
  };

  const handleRepostClick = () => {
    setShowRepostNotification(true);
    setTimeout(() => {
      setShowRepostNotification(false);
    }, 3000);
  };

  const handleCloseNotification = () => {
    setShowRepostNotification(false);
  };

  return (
    <div className="main-post mt-4 mb-3 sm:mb-4">
      {isDeleted ? (
        <div className="deleted-post-message flex items-center justify-between p-4 rounded-lg main-bg text-center">
          <p className="text-[#dbdbdb]">Post removed from your feed</p>
          <button
            className="undo-button text-[#71b7fb] hover:bg-[#71b6fb34] px-2 py-1 rounded-md transition-all duration-150"
            onClick={handleUndo}
          >
            Undo
          </button>
        </div>
      ) : (
        <main className="main-bg p-3 rounded-lg">
          <div>
            <div>
              <div
                style={{
                  display: props.ifLikeDisplay,
                  borderBottom: "1px solid rgb(64 64 64)",
                }}
                className="mb-2 pb-1"
              >
                <Link
                  className="if-comment flex items-center gap-2 w-full relative bottom-1"
                  to={`/user/${props.ifLikeID}`}
                >
                  <img
                    src={props.ifLikeImg}
                    alt="user-comment"
                    className="cursor-pointer w-8 h-8 rounded-full"
                  />
                  <h3 className="text-gray text-sm">
                    <span className="text-white font-semibold hover:underline cursor-pointer hover:text-blue-300">
                      {props.ifLikeName}
                    </span>{" "}
                    Like this
                  </h3>
                </Link>
              </div>
              <div
                style={{
                  display: props.ifCommentDisplay,
                  borderBottom: "1px solid rgb(64 64 64)",
                }}
                className="mb-2 pb-1"
              >
                <Link
                  className="if-comment flex items-center gap-2 w-full relative bottom-1"
                  to={`/user/${props.id}`}
                >
                  <img
                    src={props.ifCommentImg}
                    alt="user-comment"
                    className="cursor-pointer w-8 h-8 rounded-full"
                  />
                  <h3 className="text-gray text-sm">
                    <span className="text-white font-semibold hover:underline cursor-pointer hover:text-blue-300">
                      {props.ifCommentName}
                    </span>{" "}
                    Commented on this
                  </h3>
                </Link>
              </div>
              <div className="flex items-start justify-between">
                <Link
                  to={`/user/${props.id}`}
                  key={props.id}
                  className="flex items-center"
                >
                  <img
                    src={props.userImg}
                    alt={props.userName}
                    className="user-image w-14 h-14 rounded-full"
                  />
                  <div className="ml-3">
                    <h2 className="user-name text-base font-semibold text-[#ffffffe6] transition duration-150 hover:text-[#71b7fb] hover:underline">
                      {props.userName}
                    </h2>
                    <p className="user-followers text-[#ffffff99] text-sm">
                      {props.userFollowers} followers
                    </p>
                    <p className="user-post-time flex items-center text-[#ffffff99] text-sm">
                      {props.postTime} •{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 ml-1 mt-[2px]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </p>
                  </div>
                </Link>
                <div className="flex items-center gap-2">
                  <DropdownMenu />
                  <button
                    type="button"
                    className="text-[#ffffff99] bg-transparent hover:bg-[#ffffff1d] rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center transition-all duration-200"
                    onClick={handleDelete}
                  >
                    <svg
                      className="w-[13px] h-[13px]"
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
              <div className="main-post-content">
                <h2 className="text-[#dbdbdb] text-base font-medium mt-1 mb-2">
                  {props.postTitle}
                </h2>
                <div>
                  <img
                    src={props.img}
                    alt="Post"
                    style={{ display: props.imgDisplay }}
                  />
                </div>
                <div
                  className="w-full flex items-center justify-between mt-2 pb-1"
                  style={{ borderBottom: "1px solid #404040" }}
                >
                  <div className="flex cursor-pointer">
                    <div className="relative">
                      <img src={LikeIcon} alt="react-icon" />
                    </div>
                    <div className="relative right-[6px]">
                      <img src={HeartIcon} alt="react-icon" />
                    </div>
                    <div className="relative right-[12px]">
                      <img src={CareIcon} alt="react-icon" />
                    </div>
                    <div>
                      <p className="post-reacts-number text-[#ffffff99] text-xs relative right-2 hover:text-[#71b7fb] hover:underline cursor-pointer">
                        {props.reactsNum}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="post-comments">
                      <h5
                        className="text-[#ffffff99] text-xs font-medium hover:text-[#71b7fb] hover:underline cursor-pointer"
                        onClick={handleToggleComments}
                      >
                        {props.commentsNum} comments
                      </h5>
                    </div>
                    <span className="mx-1 text-[#ffffff99]">•</span>
                    <div className="post-reposts">
                      <h5 className="text-[#ffffff99] text-xs font-medium hover:text-[#71b7fb] hover:underline cursor-pointer">
                        {props.repostsNum} reposts
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="w-full flex mt-2 gap-1 sm:gap-3">
                  <div className="relative w-1/4 group">
                    <button
                      className="like-react mt-[5px] w-full flex items-center justify-center py-1 hover:bg-[#8c8c8c26] rounded-md transition duration-150"
                      onClick={() => handleReactionClick("like")}
                    >
                      {renderIcon()}
                      <h6 className="text-[#ffffff99] text-sm sm:font-semibold ml-1">
                        {reaction === "like"
                          ? "Like"
                          : reaction === "celebrate"
                          ? "Celebrate"
                          : reaction === "support"
                          ? "Support"
                          : reaction === "love"
                          ? "Love"
                          : reaction === "insightful"
                          ? "Insightful"
                          : reaction === "funny"
                          ? "Funny"
                          : "Like"}
                      </h6>
                    </button>
                    <div
                      style={{ border: "1px solid #404040" }}
                      className="reacts-side hidden group-hover:flex items-center gap-4 absolute bottom-10 left-[2px] px-2 py-1 main-bg rounded-md shadow-md"
                    >
                      <div>
                        <Tooltip
                          content="Like"
                          placement="top"
                          animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                          }}
                          className="px-4 py-1"
                        >
                          <button onClick={() => handleReactionClick("like")}>
                            <img
                              src={LikeIcon1}
                              alt="like"
                              className={`icon-img-react hover:-translate-y-[5px] transition duration-150 ${
                                reaction === "like" ? "text-blue-500" : ""
                              }`}
                            />
                          </button>
                        </Tooltip>
                        <Tooltip
                          content="Celebrate"
                          placement="top"
                          animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                          }}
                          className="px-4 py-1"
                        >
                          <button
                            onClick={() => handleReactionClick("celebrate")}
                          >
                            <img
                              src={CelebrateIcon}
                              alt="celebrate"
                              className={`icon-img-react hover:-translate-y-[5px] transition duration-150 ${
                                reaction === "celebrate" ? "text-blue-500" : ""
                              }`}
                            />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <Tooltip
                          content="Support"
                          placement="top"
                          animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                          }}
                          className="px-4 py-1"
                        >
                          <button
                            onClick={() => handleReactionClick("support")}
                          >
                            <img
                              src={CareIcon1}
                              alt="support"
                              className={`icon-img-react hover:-translate-y-2 transition duration-150 ${
                                reaction === "support" ? "text-yellow-500" : ""
                              }`}
                            />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <Tooltip
                          content="Love"
                          placement="top"
                          animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                          }}
                          className="px-4 py-1"
                        >
                          <button onClick={() => handleReactionClick("love")}>
                            <img
                              src={HeartIcon1}
                              alt="love"
                              className={`icon-img-react hover:-translate-y-2 transition duration-150 ${
                                reaction === "love" ? "text-red-500" : ""
                              }`}
                            />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <Tooltip
                          content="Insightful"
                          placement="top"
                          animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                          }}
                          className="px-4 py-1"
                        >
                          <button
                            onClick={() => handleReactionClick("insightful")}
                          >
                            <img
                              src={InsightfulIcon}
                              alt="insightful"
                              className={`icon-img-react hover:-translate-y-2 transition duration-150 ${
                                reaction === "insightful" ? "text-red-500" : ""
                              }`}
                            />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <Tooltip
                          content="Funny"
                          placement="top"
                          animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0, y: 25 },
                          }}
                          className="px-4 py-1"
                        >
                          <button onClick={() => handleReactionClick("funny")}>
                            <img
                              src={FunnyIcon}
                              alt="funny"
                              className={`icon-img-react hover:-translate-y-2 transition duration-150 ${
                                reaction === "funny" ? "text-red-500" : ""
                              }`}
                            />
                          </button>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                  <button
                    className="post-comment w-1/4 flex items-center justify-center py-1 hover:bg-[#8c8c8c26] rounded-md transition duration-150"
                    onClick={handleToggleComments}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#ffffff99"
                      className="size-5 sm:size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                      />
                    </svg>
                    <h6 className="text-[#ffffff99] text-sm sm:font-semibold ml-1">
                      Comment
                    </h6>
                  </button>
                  <button
                    className="post-repost w-1/4 flex items-center justify-center py-1 hover:bg-[#8c8c8c26] rounded-md transition duration-150"
                    onClick={handleRepostClick}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#ffffff99"
                      className="size-5 sm:size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
                      />
                    </svg>
                    <h6 className="text-[#ffffff99] text-sm sm:font-semibold ml-1">
                      Repost
                    </h6>
                  </button>
                  <NotAvilablePopup
                    buttonText="Send"
                    buttonClass="post-send w-1/4 flex justify-center text-[#ffffff99] py-1 hover:bg-[#8c8c8c26] rounded-md transition duration-150"
                    buttonIcon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#ffffff99"
                        className="size-5 sm:size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        />
                      </svg>
                    }
                  />
                </div>
              </div>
              <div
                className={`comments-section main-bg rounded-md transition-all duration-300 ease-in-out ${
                  showComments
                    ? "max-h-[300px] opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="flex items-center mt-4">
                  <img
                    src={AvatarImg}
                    alt="avatar"
                    className="w-11 h-11 max-w-max rounded-full"
                  />
                  <div className="relative w-full ml-2">
                    <input
                      type="text"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Add a comment..."
                      className="w-full main-bg rounded-full placeholder:text-[#ffffff99] text-white py-2"
                      style={{ border: "2px solid #909090" }}
                    />
                    <button className="absolute right-16 top-[6px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#ffffff99"
                        className="size-8 hover:bg-[#ffffff1d] p-1 transition-all duration-150 rounded-full"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                        />
                      </svg>
                    </button>
                    <button className="absolute right-6 top-[6px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#ffffff99"
                        className="size-8 hover:bg-[#ffffff1d] p-1 transition-all duration-150 rounded-full"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                {commentText && (
                  <div className="flex mt-3 ml-12">
                    <button className="post-button bg-[#71b7fb] text-[#1b1f23] font-semibold px-3 rounded-full hover:bg-[#4490ce] transition duration-150">
                      Post
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      )}
      {showRepostNotification && (
        <div
          className="repost-content fixed w-full bottom-4 left-[10px] sm:left-4 mx-auto main-bg text-white p-3 rounded-md transition-all duration-300 ease-in-out flex items-center shadow-md"
          style={{ border: "1px solid #404040", width: "calc(100% - 20px)" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#37c898"
            className="size-6 mr-3"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <p>Repost successful.</p>
          <div>
            <button
              onClick={handleCloseNotification}
              className="ml-2 absolute right-2 top-[10px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff99"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 p-1 hover:bg-[#ffffff1d] rounded-full transition-all duration-200"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
