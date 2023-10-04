import React, { useState } from "react";
import "./CustomerFeedback.css"; // Import your CSS for styling

function CustomerFeedback({ onSubmitFeedback }) {
  const [feedback, setFeedback] = useState("");

  const handleInputChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitFeedback(feedback); // Call the provided onSubmitFeedback function
    setFeedback(""); // Clear the input after submitting
  };

  return (
    <div className="CustomerFeedback">
      <h3>Leave a Feedback</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={handleInputChange}
          placeholder="Your feedback..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CustomerFeedback;
