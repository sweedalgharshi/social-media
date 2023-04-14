import React from "react";
import "./closeFriend.css";

function CloseFriend({ user }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebar-friend">
      <img src={PUBLIC_FOLDER + user.profilePicture} alt="" className="sidebar-friend-img" />
      <span className="sidebar-friend-name">{user.username}</span>
    </li>
  );
}

export default CloseFriend;
