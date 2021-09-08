import { React, useState, useEffect } from "react";
import "./App.css";
import Video from "./components/video.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddVideo from "./components/addVideo";

function App() {
  const [videos, setVideos] = useState([]);
  const [trash, setTrash] = useState(true); //use this state to render loadvids everytime delete function is called

  const loadVids = () => {
    fetch("http://localhost:3000/", {})
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
  const Delete = (id) => {
    fetch(`http://localhost:3000/${id}`, {
      method: "DELETE",
    }).catch((e) => console.error(e));
    setTrash(!trash);
  };
  useEffect(() => {
    loadVids();
  }, [trash]);
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Video Recommendation</h1>
        </header>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Video {...props} data={videos} delete={Delete} />
            )}
          />
          <Route
            path="/AddVideo"
            exact
            render={(props) => <AddVideo {...props} pushVideo={PushVideo} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
