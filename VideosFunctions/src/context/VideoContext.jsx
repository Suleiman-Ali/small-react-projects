import React, { useState } from "react";

export const videoContext = React.createContext();

export default function VideoContext({ children }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const setVideosHandler = (videos) => setVideos(videos);
  const setSelectedVideoHandler = (video) => setSelectedVideo(video);

  return (
    <videoContext.Provider
      value={{
        videos: videos,
        setVideos: setVideosHandler,
        selectedVideo: selectedVideo,
        setSelectedVideo: setSelectedVideoHandler,
      }}
    >
      {children}
    </videoContext.Provider>
  );
}
