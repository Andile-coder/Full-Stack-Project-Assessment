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
    if (addedVid.title === "" || addedVid.url === "") {
      return alert("All Fields are mandatory");
    } else if (addedVid.url != "") {
      var p =
        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      if (addedVid.url.match(p)) {
        console.log("video validated");
        props.pushVideo(addedVid);
        return addedVid.url.match(p)[1];
      }
      console.log("video not validated");
      return false;
    }
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
