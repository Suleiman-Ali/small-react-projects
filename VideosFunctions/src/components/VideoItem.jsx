import React, { useContext } from "react";
import { videoContext } from "../context/VideoContext";
import "../styles/VideoItem.css";

export default function VideoItem({ video }) {
  const { setSelectedVideo } = useContext(videoContext);
  const videoSelectHandler = () => setSelectedVideo(video);

  const title = video.snippet.title;
  const url = video.snippet.thumbnails.medium.url;

  return (
    <div className="video-item item" onClick={videoSelectHandler}>
      <img src={url} alt={title} className="ui image" />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
}
