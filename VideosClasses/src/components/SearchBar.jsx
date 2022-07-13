import React, { Component } from "react";
import { videoContext } from "../context/VideoContext";
import youtube from "../api/youtube";

export default class SearchBar extends Component {
  static contextType = videoContext;

  state = { term: "React" };

  componentDidMount() {
    this.submitHandler();
  }

  changeHandler = (e) => this.setState({ term: e.target.value });

  submitHandler = async (e) => {
    try {
      e.preventDefault();
    } catch (err) {}

    const term = this.state.term;

    this.setState({ term: "" });

    const { data } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    const videos = data.items;

    this.context.setVideos(videos);
    this.context.setSelectedVideo(videos[0]);
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.changeHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}
