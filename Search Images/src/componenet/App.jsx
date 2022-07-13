import getImages from "../api/unsplash.js";
import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

export default class App extends Component {
  state = {
    term: "",
    images: [],
  };

  changeHandler = (event) => this.setState({ term: event.target.value });

  submitHandler = async (event) => {
    event.preventDefault();
    const data = await getImages(this.state.term);
    this.setState({ images: data });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
          term={this.state.term}
        />

        <ImageList images={this.state.images} />
      </div>
    );
  }
}
