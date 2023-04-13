import React from "react";
import "./post.css";

import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";

function Post({ post }) {
  const userName = Users.filter((user) => user.id === post?.userId)[0].username;
  const profilePic = Users.filter((user) => user.id === post?.userId)[0].profilePicture;

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img src={profilePic} alt="" className="post-profilePic" />
            <span className="post-username">{userName}</span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post.desc ? post.desc : ""}</span>
          <img src={post.photo} alt="" className="post-img" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img src="/assets/like.png" alt="" className="like-icon" />
            <img src="/assets/heart.png" alt="" className="like-icon" />
            <span className="post-like-counter">{post.like} people like it</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
