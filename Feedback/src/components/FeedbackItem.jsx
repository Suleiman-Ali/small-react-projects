import React, { PureComponent, useContext } from "react";
import Card from "./shared/Card";
import { FaEdit, FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackItem({ feedback }) {
  const { deleteHandler, editHandler } = useContext(FeedbackContext);
  const { id, rating, text } = feedback;

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button onClick={() => deleteHandler(feedback)} className="close">
        {<FaTimes color="purple" />}
      </button>
      <button onClick={() => editHandler(feedback)} className="edit">
        {<FaEdit color="purple" />}
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}
