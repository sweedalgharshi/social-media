import React from "react";
import "./post.css";

import { MoreVert } from "@mui/icons-material";

function Post() {
  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img src="/assets/person/1.jpeg" alt="" className="post-profilePic" />
            <span className="post-username">Sweedal Gracius</span>
            <spana className="post-date">5 mins ago</spana>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">Hey! Its my first post.. :)</span>
          <img src="/assets/post/1.jpeg" alt="" className="post-img" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img src="/assets/like.png" alt="" className="like-icon" />
            <img src="/assets/heart.png" alt="" className="like-icon" />
            <span className="post-like-counter">32 people like it</span>
          </div>
          <div className="post-bottom-right">
            <span className="post-comment-text">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
