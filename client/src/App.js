import { React, useState, useEffect } from "react";
import "./App.css";
import Video from "./components/video.js";
import AddVideo from "./components/addVideo";

function App() {
  const [videos, setVideos] = useState([]);

  const loadVids = () => {
    fetch("exampleresponse.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.sort((a, b) => (a.rating < b.rating ? 1 : -1));
        setVideos(data);
      });
  };
  const PushVideo = (arr) => {
    setVideos([...videos, arr]);
  };
  const Delete = (e) => {
    console.log(e);
    const newArray = videos.filter((contact) => {
      return contact.id != e;
    });

    setVideos(newArray);
  };
  useEffect(() => {
    loadVids();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
        <AddVideo pushVideo={PushVideo} />
      </header>
      <Video data={videos} delete={Delete} />
    </div>
  );
}

export default App;
