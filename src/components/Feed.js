import React from "react";
import FeedItem from "./FeedItem";
import { useAuth0 } from "../react-auth0-spa";

const Feed = ({ feeds }) => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className=" row marketing ">
      {isAuthenticated && feeds.map(feed =>
        <FeedItem key={feed.id} feed={feed} ></FeedItem>
      )}
    </div>

  );
};

export default Feed;
