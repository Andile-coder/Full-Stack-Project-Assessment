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
        setVideos(data);
      });
  };
  const PushVideo = (arr) => {
    console.log("=======");
    const vid = {
      id: 52345555154545,
      title: "Andile",
      url: "https://www.youtube.com/watch?v=HerCR8bw_GE",
      rating: 230,
    };

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
