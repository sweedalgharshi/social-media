import React, { useEffect, useState } from "react";
import "./feed.css";

import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
// import { Posts } from "../../dummyData";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = username
          ? await axios.get("/posts/profile/" + username)
          : await axios.get("posts/timeline/6438e5bf353543198b32a713");
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, [username]);
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
