import React, { Component } from "react";
import ImageCard from "./ImageCard";
import styles from "./ImageList.module.css";

export default function ImageList(props) {
  const { images } = props;
  const mappedImages = images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));

  return <div className={styles["image-list"]}>{mappedImages}</div>;
}
