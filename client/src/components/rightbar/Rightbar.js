import React, { Fragment, useEffect, useState } from "react";
import "./rightbar.css";

import { Users } from "../../dummyData.js";
import Online from "../online/Online";

import axios from "axios";
import { Link } from "react-router-dom";

function Rightbar({ user }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFriends();
  }, [user._id]);
  const HomeRightBar = () => {
    return (
      <Fragment>
        <div className="birthday-container">
          <img src="/assets/gift.png" className="birthday-img" alt="" />
          <span className="birthday-text">
            <b>Pola Foster</b> and <b>3 other friends</b> have birthday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbar-ad" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friend-list">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
      </Fragment>
    );
  };

  const ProfileRightBar = () => {
    return (
      <Fragment>
        <h4 className="rightbar-title">User Information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City:</span>
            <span className="rightbar-info-value">{user.city}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From:</span>
            <span className="rightbar-info-value">{user.from}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship:</span>
            <span className="rightbar-info-value">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "Its Complicated"}
            </span>
          </div>
        </div>
        <h4 className="rightbar-title">User friends</h4>
        <div className="rightbar-followings">
          {friends.map((friend) => (
            <Link to={`/profile/${friend.username}`} style={{ textDecoration: "none" }}>
              <div className="rightbar-following">
                <img
                  src={
                    friend.profilePicture
                      ? friend.profilePicture
                      : PUBLIC_FOLDER + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbar-following-img"
                />
                <span className="rightbar-following-name">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </Fragment>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">{user ? <ProfileRightBar /> : <HomeRightBar />}</div>
    </div>
  );
}

export default Rightbar;
