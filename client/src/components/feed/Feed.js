import React from "react";
import "./feed.css";

import Share from "../share/Share";
import Post from "../post/Post";

import { Posts } from "../../dummyData";

function Feed() {
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
