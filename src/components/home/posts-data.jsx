import OsamaElzeroImg from "/src/assets/osama-elzero.jpeg";
import MohammedAbusreaImg from "/src/assets/mohammed-abosre3.jpg";
import AhmedFathyImg from "/src/assets/ahmed-fathy.jpg";
import PostOneImg from "/src/assets/post-1.jpeg";
import PostTwoImg from "/src/assets/post-2.jpg";
import PostThreeImg from "/src/assets/post-3.jpg";

export const Posts = [
  {
    id: 1,
    userImg: OsamaElzeroImg,
    userName: "Osama Elzero",
    userFollowers: "255.325",
    postTime: "8h",
    postTitle:
      "This repo contains a treasure trove of JavaScript articles , Link In Comments .",
    img: PostOneImg,
    reactsNum: 412,
    commentsNum: 30,
    repostsNum: 21,
  },
  {
    id: 2,
    userImg: MohammedAbusreaImg,
    userName: "Mohammed Abusrea",
    userFollowers: "92.542",
    postTime: "2d",
    postTitle:
      "should i learn JavaScript or TypeScript ?! Video Link In Comments..",
    img: PostTwoImg,
    reactsNum: 168,
    commentsNum: 13,
    repostsNum: 6,
  },
  {
    id: 3,
    userImg: AhmedFathyImg,
    userName: "Ahmed Fathy",
    userFollowers: "121.389",
    postTime: "3d",
    postTitle: "important live on youtube after two hours ..",
    img: PostThreeImg,
    reactsNum: 150,
    commentsNum: 5,
    repostsNum: 24,
  },
];
