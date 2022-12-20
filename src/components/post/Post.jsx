import { MoreVert } from "@mui/icons-material";
import "./post.css";
import { Users } from "../../dummyData";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src= {Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="./assets/like.png" alt="" />
            <img className="heartIcon" src="./assets/heart.png" alt="" />
            <span className="postLikeCounter">
              {post.like}32 people like it.
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
