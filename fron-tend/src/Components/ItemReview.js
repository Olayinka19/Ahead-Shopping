// 


import React, { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import "./ItemReview.css"; // Import your CSS for styling

function StarRating({ rating }) {
  const MAX_STARS = 5;
  const stars = [];

  for (let i = 1; i <= MAX_STARS; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="StarIcon" />);
    } else if (i - 0.5 <= rating) {
      stars.push(<FaStarHalfAlt key={i} className="StarIcon" />);
    } else {
      stars.push(<FaStar key={i} className="StarIcon" />);
    }
  }

  return <div className="StarRating">{stars}</div>;
}

function ItemReview({ review }) {
  return (
    <div className="ItemReview">
      <div className="Reviewer">{review.reviewer}</div>
      <StarRating rating={review.rating} />
      <div className="Comment">{review.comment}</div>
      <div className="ItemInfo">
        Item: {review.item_name}
        <img src={review.item_image} alt={review.item_name} />
      </div>
    </div>
  );
}

export default ItemReview;
