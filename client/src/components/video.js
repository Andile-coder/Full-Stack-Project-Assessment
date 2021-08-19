import React from "react";
import ReactPlayer from "react-player";
import Ratings from "./ratings";
const Video = (props) => {
  const [id, title, url, rating] = props.data;
  const video = props.data.map((vid) => {
    return (
      <div key={vid.id}>
        <div>
          <h3>{vid.title}</h3>
          {/* <ReactPlayer url={vid.url} /> */}
        </div>
        <div>
          <span>
            <button onClick={() => props.delete(vid.id)}>Delete</button>
          </span>
          <span>
            <Ratings rate={vid.rating} />
          </span>
        </div>
      </div>
    );
  });
  return video;
};
export default Video;
