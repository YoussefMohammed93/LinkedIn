import AvatarImg from "/src/assets/avatar.png";
import PostPopup from "./post-popup";
import MediaPostPopup from "./post-media-popup";
import NotAvilablePopup from "./not-avilable-popup";
import { Posts } from "./posts-data";
import Post from "./posts";

export default function MainSide() {
  function MainPostFN() {
    const PostsDataShow = Posts.map((post) => (
      <Post
        key={post.id}
        userImg={post.userImg}
        userName={post.userName}
        userFollowers={post.userFollowers}
        img={post.img}
        postTime={post.postTime}
        postTitle={post.postTitle}
        reactsNum={post.reactsNum}
        commentsNum={post.commentsNum}
        repostsNum={post.repostsNum}
      />
    ));
    return <div className="main-posts">{PostsDataShow}</div>;
  }
  return (
    <div className="main-side-container">
      <div className="main-bg rounded-lg">
        <div className="user-post px-4 py-3">
          <div className="flex items-center">
            <div>
              <img
                src={AvatarImg}
                alt="user-avatar"
                className="rounded-full w-14 h-14"
                style={{ maxWidth: "max-content" }}
              />
            </div>
            <div className="w-full ml-4">
              <PostPopup />
            </div>
          </div>
          <div>
            <div className="user-post-btns flex items-center justify-between px-3 sm:px-5 pt-3">
              <MediaPostPopup />
              <NotAvilablePopup
                buttonText="Event"
                buttonIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#e9a53f"
                    className="size-6 sm:size-7"
                  >
                    <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                buttonClass="hover:bg-[#8c8c8c26]"
              />
              <NotAvilablePopup
                buttonText="Write article"
                buttonIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#f69b81"
                    className="size-6 sm:size-7"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                      clipRule="evenodd"
                    />
                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                  </svg>
                }
                buttonClass="hover:bg-[#8c8c8c26]"
              />
            </div>
          </div>
        </div>
      </div>
      <MainPostFN />
    </div>
  );
}
