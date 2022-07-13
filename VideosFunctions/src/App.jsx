import React from "react";
import SearchBar from "./components/SearchBar";
import VideoDetails from "./components/VideoDetails";
import VideoList from "./components/VideoList";

export default function App() {
  return (
    <div className="ui container" style={{ marginTop: "1.5rem" }}>
      <SearchBar />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails />
          </div>
          <div className="five wide column">
            <VideoList />
          </div>
        </div>
      </div>
    </div>
  );
}
