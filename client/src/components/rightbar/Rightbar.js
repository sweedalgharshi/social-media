import React, { Fragment } from "react";
import "./rightbar.css";

import { Users } from "../../dummyData.js";
import Online from "../online/Online";

function Rightbar({ user }) {
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
    const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
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
          <div className="rightbar-following">
            <img src={`${PUBLIC_FOLDER}person/1.jpeg`} alt="" className="rightbar-following-img" />
            <span className="rightbar-following-name">Alex Corrigan</span>
          </div>
          <div className="rightbar-following">
            <img src={`${PUBLIC_FOLDER}person/1.jpeg`} alt="" className="rightbar-following-img" />
            <span className="rightbar-following-name">Alex Corrigan</span>
          </div>
          <div className="rightbar-following">
            <img src={`${PUBLIC_FOLDER}person/1.jpeg`} alt="" className="rightbar-following-img" />
            <span className="rightbar-following-name">Alex Corrigan</span>
          </div>
          <div className="rightbar-following">
            <img src={`${PUBLIC_FOLDER}person/1.jpeg`} alt="" className="rightbar-following-img" />
            <span className="rightbar-following-name">Alex Corrigan</span>
          </div>
          <div className="rightbar-following">
            <img src={`${PUBLIC_FOLDER}person/1.jpeg`} alt="" className="rightbar-following-img" />
            <span className="rightbar-following-name">Alex Corrigan</span>
          </div>
          <div className="rightbar-following">
            <img src={`${PUBLIC_FOLDER}person/1.jpeg`} alt="" className="rightbar-following-img" />
            <span className="rightbar-following-name">Alex Corrigan</span>
          </div>
          <div className="rightbar-following">
            <img src={`${PUBLIC_FOLDER}person/1.jpeg`} alt="" className="rightbar-following-img" />
            <span className="rightbar-following-name">Alex Corrigan</span>
          </div>
          <div className="rightbar-following">
            <img src={`${PUBLIC_FOLDER}person/1.jpeg`} alt="" className="rightbar-following-img" />
            <span className="rightbar-following-name">Alex Corrigan</span>
          </div>
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