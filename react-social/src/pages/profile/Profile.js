import React from "react";
import "./profile.css";

import { Fragment } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

function Profile() {
  return (
    <Fragment>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img src="/assets/post/3.jpeg" className="profile-cover-img" alt="" />
              <img src="/assets/person/5.jpeg" className="profile-user-img" alt="" />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">Rogue Dusk</h4>
              <span className="profile-info-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Profile;
