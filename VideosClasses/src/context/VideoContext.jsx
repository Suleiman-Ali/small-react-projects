import React, { Component } from "react";

export const videoContext = React.createContext();

export default class VideoContext extends Component {
  state = { videos: [], selectedVideo: null };

  setVideos = (videos) => this.setState({ videos });
  setSelectedVideo = (video) => this.setState({ selectedVideo: video });

  render() {
    return (
      <videoContext.Provider
        value={{
          videos: this.state.videos,
          setVideos: this.setVideos,
          selectedVideo: this.state.selectedVideo,
          setSelectedVideo: this.setSelectedVideo,
        }}
      >
        {this.props.children}
      </videoContext.Provider>
    );
  }
}
