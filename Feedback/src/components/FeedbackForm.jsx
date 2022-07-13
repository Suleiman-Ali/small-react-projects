import { v4 as uuidv4 } from "uuid";
import React, { Component, useContext, useEffect, useState } from "react";
import SelectRating from "./SelectRating";
import Button from "./shared/Button";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackForm({}) {
  const {
    addHandler: addFeedback,
    updateHandler: feedbackUpdate,
    feedbackEdit,
  } = useContext(FeedbackContext);
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    if (feedbackEdit.isEdit === true) {
      setIsDisabled(true);
      setText(feedbackEdit.feedback.text);
      setRating(feedbackEdit.feedback.rating);
    }
  }, [feedbackEdit]);

  const textChangeHandler = (e) => {
    if (text === "") {
      setIsDisabled(true);
      setMsg(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setIsDisabled(true);
      setMsg("Text must be at least 10 chars");
    } else {
      setMsg(null);
      setIsDisabled(false);
    }

    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newFeedback = { id: uuidv4(), text, rating };

    if (feedbackEdit.isEdit) {
      newFeedback.id = feedbackEdit.feedback.id;
      feedbackUpdate(feedbackEdit.feedback.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }

    setRating(10);
    setText("");
    setIsDisabled(true);
    setMsg(null);
  };

  return (
    <div className="container">
      <Card>
        <form onSubmit={submitHandler}>
          <h2>How would you rate your service with us?</h2>

          <SelectRating
            rating={rating}
            setRating={(rating) => setRating(rating)}
          />

          <div className="input-group">
            <input
              value={text}
              onChange={textChangeHandler}
              type="text"
              placeholder="Write a review.."
            />

            <Button type="submit" isDisabled={isDisabled}>
              Send
            </Button>
          </div>

          {msg && <div className="message">{msg}</div>}
        </form>
      </Card>
    </div>
  );
}
