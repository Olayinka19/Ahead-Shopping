import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; // Import star icons

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

export default StarRating;
