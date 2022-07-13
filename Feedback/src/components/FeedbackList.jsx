import React, { Component, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList({}) {
  const { feedbacks } = useContext(FeedbackContext);

  if (!feedbacks || feedbacks.length === 0)
    return (
      <div className="container">
        <p>No Feedback Yet.</p>
      </div>
    );

  const mappedFeedbacks = feedbacks.map((feedback) => (
    <FeedbackItem key={feedback.id} feedback={feedback} />
  ));

  return <div className="container">{mappedFeedbacks}</div>;
}
