import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

export default function AboutPage({}) {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a React APP to leave a review for a Product or Service</p>
        <p>Version: 1.0.0</p>
        <Link to="/">Back to Home</Link>
      </div>
    </Card>
  );
}
