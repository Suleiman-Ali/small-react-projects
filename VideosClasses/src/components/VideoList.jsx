import React, { useContext } from "react";
import { videoContext } from "../context/VideoContext";
import VideoItem from "./VideoItem";

export default function VideoList() {
  const { videos } = useContext(videoContext);

  if (videos.length === 0) return null;

  const mappedVideos = videos.map((video) => (
    <VideoItem key={video.id.videoId} video={video} />
  ));

  return <div className="ui relaxed divided list">{mappedVideos}</div>;
}
