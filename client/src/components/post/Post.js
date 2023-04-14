import React, { useEffect } from "react";
import "./post.css";

import { useState } from "react";

import { MoreVert } from "@mui/icons-material";
// import { Users } from "../../dummyData";

import axios from "axios";
import { format } from "timeago.js";

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [users, setUsers] = useState({});

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleClick = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`users/${post.userId}`);
      setUsers(response.data);
      console.log(response.data);
    };
    fetchUser();
  }, [post.userId]);

  const userName = users.username;
  const profilePic = users.profilePicture;

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="post-top-left">
            <img
              src={profilePic || PUBLIC_FOLDER + "person/noAvatar.png"}
              alt=""
              className="post-profilePic"
            />
            <span className="post-username">{userName}</span>
            <span className="post-date">{format(post.createdAt)}</span>
          </div>
          <div className="post-top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post.desc ? post.desc : ""}</span>
          <img src={PUBLIC_FOLDER + post.img} alt="" className="post-img" />
        </div>
        <div className="post-bottom">
          <div className="post-bottom-left">
            <img
              src={`${PUBLIC_FOLDER}like.png`}
              alt=""
              className="like-icon"
              onClick={handleClick}
            />
            <img
              src={`${PUBLIC_FOLDER}heart.png`}
              alt=""
              className="like-icon"
              onClick={handleClick}
            />
            <span className="post-like-counter">{like} people like it</span>
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
