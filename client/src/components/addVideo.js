import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        alert("video validated and added");

        fetch(`http://localhost:3000/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: `${addedVid.title}`,
            url: `${addedVid.url}`,
          }),
        }).catch((e) => console.error(e));
        return addedVid.url.match(p)[1];
      }
      alert("video not validated, insert a valid youtube link");
      return false;
    }
  };
  return (
    <div>
      <div>
        <Link to="/">
          <button>Back to List</button>
        </Link>
      </div>
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
    </div>
  );
};
export default AddVideo;
