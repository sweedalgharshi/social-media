import React, { useContext } from "react";
import "./topbar.css";

import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function Topbar() {
  const { user } = useContext(AuthContext);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Roguesocial</span>
        </Link>
      </div>

      <div className="topbar-center">
        <div className="searchbar">
          <Search className="search-icon" />
          <input placeholder="Search for friends, post or video" className="search-input" />
        </div>
      </div>

      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">Homepage</span>

          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon-item">
            <Person />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icon-item">
            <Chat />
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon-item">
            <Notifications />
            <span className="topbar-icon-badge">4</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PUBLIC_FOLDER + user.profilePicture
                : PUBLIC_FOLDER + "person/noAvatar.png"
            }
            alt="img"
            className="topbar-img"
          />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
