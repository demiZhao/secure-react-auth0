import React from "react";

const FeedItem = ({ feed }) => {
  return (
      <div className="col-md-6 item">

        <h4>{feed.name}</h4>
        <p className="badge badge-secondary">{`$  ${feed.price}`}</p>
        <p className="description" dangerouslySetInnerHTML={{ __html:  feed.description}} />
        <img src={feed.image} height={150}></img>
      </div>
  );
};

export default FeedItem;
