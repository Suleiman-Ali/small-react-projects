import React, { Component } from "react";

export default function Spinner() {
  return (
    <div
      className="form-back"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="spinner-border text-light"
        role="status"
        style={{ width: "5rem", height: "5rem" }}
      ></div>

      <h1 className="heading">Loading...</h1>
    </div>
  );
}
