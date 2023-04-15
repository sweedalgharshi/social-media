import React, { useEffect, useState } from "react";
import "./profile.css";

import { Fragment } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";

import { useParams } from "react-router-dom";

function Profile() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const params = useParams();
  const username = params.username;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=${username}`);
      setUser(response.data);
    };
    fetchUser();
  }, [username]);

  return (
    <Fragment>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img
                src={user.coverPicture || PUBLIC_FOLDER + "person/noCover.png"}
                className="profile-cover-img"
                alt=""
              />
              <img
                src={user.profilePicture || PUBLIC_FOLDER + "person/noAvatar.png"}
                className="profile-user-img"
                alt=""
              />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-name">{user.username}</h4>
              <span className="profile-info-desc">{user.desc}</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Profile;
