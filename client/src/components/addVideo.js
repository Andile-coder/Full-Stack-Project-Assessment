import { React, useState, useEffect } from "react";
const AddVideo = (props) => {
  let addedVid = {
    title: "",
    url: "",
    id: "5234",
    rating: 0,
  };
  const Add = (e) => {
    e.preventDefault();
    props.pushVideo(addedVid);
  };
  return (
    <div>
      <form onSubmit={Add}>
        <label htmlFor="fTitle"> Title:</label>
        <input
          type="text"
          id="fTitle"
          name="fTitle"
          onChange={(e) => (addedVid.title = e.target.value)}
        />
        <label htmlFor="fUrl"> URL:</label>
        <input
          type="url"
          id="fUrl"
          name="fTitle"
          onChange={(e) => (addedVid.url = e.target.value)}
        />
        <button>ADD</button>
      </form>{" "}
    </div>
  );
};
export default AddVideo;
