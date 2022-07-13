import { createContext, useState } from "react";
import feedbackData from "../data/feedbackData";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedbacks, setFeedbacks] = useState(feedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    feedback: {},
    isEdit: false,
  });

  const addHandler = (newFeedback) => {
    setFeedbacks((prev) => [newFeedback, ...prev]);
  };

  const editHandler = (feedback) => {
    setFeedbackEdit({ feedback, isEdit: true });
  };

  const deleteHandler = (feedback) => {
    const updatedFeedbacks = feedbacks.filter(
      (feedbackItem) => feedbackItem.id !== feedback.id
    );
    setFeedbacks(updatedFeedbacks);
  };

  const updateHandler = (id, updatedFeedback) => {
    setFeedbacks([
      ...feedbacks.filter((feedback) => feedback.id !== id),
      updatedFeedback,
    ]);
    setFeedbackEdit({
      feedback: {},
      isEdit: false,
    });
  };

  //   prettier-ignore
  return <FeedbackContext.Provider value={{
      feedbacks,
      addHandler,
      deleteHandler,
      editHandler,
      feedbackEdit,
      updateHandler
  }}>{children}</FeedbackContext.Provider>;
}

export default FeedbackContext;
