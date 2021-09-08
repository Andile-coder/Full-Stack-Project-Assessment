import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Ratings from "./ratings";
const Video = (props) => {
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
            <Ratings video={[vid.id, vid.rating]} />
          </span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div>
        <Link to="/addVideo">
          <button>Add Video</button>
        </Link>
      </div>
      {video}
    </div>
  );
};
export default Video;
