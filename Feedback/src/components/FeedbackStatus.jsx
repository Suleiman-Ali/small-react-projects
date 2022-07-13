import React, { Component, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackStatus({}) {
  const { feedbacks } = useContext(FeedbackContext);

  const length = feedbacks.length;
  const ratings = length && feedbacks.map((feedback) => feedback.rating);
  //   prettier-ignore
  const ratingsSum = length && ratings.reduce((prev, current) => prev + current);
  const ratingsAvg = length && ratingsSum / length;
  //   prettier-ignore
  const ratingsAvgShow = length === 0 ? 0 : ratingsAvg.toFixed(1).replace(/[.,]0$/,"");

  return (
    <div className="feedback-stats container">
      <h4>{length} Reviews</h4>
      <h4>Average Rating: {ratingsAvgShow}</h4>
    </div>
  );
}
