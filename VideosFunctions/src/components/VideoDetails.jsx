import React, { useContext } from "react";
import { videoContext } from "../context/VideoContext";

export default function VideoDetails() {
  const { selectedVideo: video } = useContext(videoContext);

  if (video === null) return null;

  const title = video.snippet.title;
  const description = video.snippet.description;
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="Video Player" src={url} />
      </div>

      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
