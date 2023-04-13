import React from "react";
import "./rightbar.css";

import { Users } from "../../dummyData.js";
import Online from "../online/Online";

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
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
      </div>
    </div>
  );
}

export default Rightbar;
