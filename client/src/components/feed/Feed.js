import React, { useContext, useEffect, useState } from "react";
import "./feed.css";

import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
// import { Posts } from "../../dummyData";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = username
          ? await axios.get("/posts/profile/" + username)
          : await axios.get("posts/timeline/" + user._id);
        setPosts(
          response.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feed-wrapper">
        {username === user.username && <Share />}
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
