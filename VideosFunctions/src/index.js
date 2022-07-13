import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import VideoContext from "./context/VideoContext";

ReactDOM.render(
  <VideoContext>
    <App />
  </VideoContext>,
  document.querySelector("#root")
);
