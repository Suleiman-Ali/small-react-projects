import React, { Component } from "react";
import { useRef } from "react";
import styles from "./ImageList.module.css";

export default class ImageCard extends Component {
  state = { span: 0, opacity: 0.5 };

  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  setSpans = () => {
    const current = this.imageRef.current;
    const hegiht = current.clientHeight;
    const spanNo = Math.ceil(hegiht / 10 + 0.5);
    // Since the height of each row in the gird is 10px,
    // we divide the height of the image by 10
    // to get the number of rows the image needs to take
    // the 0.5 is added for providing some space around the image
    // for example if an image has a height of 100,
    // we divide 100 by 10 we get 10 which is the number of rows the image needs to take
    // applying this logic prevent images from taking more space than they need.
    this.setState({ span: spanNo, opacity: 1 });
  };

  render() {
    const src = this.props.image.urls.regular;
    const alt = this.props.image.description;
    const span = `span ${this.state.span}`;
    const opacity = this.state.opacity;

    return (
      <div style={{ gridRowEnd: span, opacity: opacity }}>
        <img ref={this.imageRef} src={src} alt={alt} onLoad={this.setSpans} />
      </div>
    );
  }
}
