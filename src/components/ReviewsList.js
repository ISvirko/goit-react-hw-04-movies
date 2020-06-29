import React from "react";

const ReviewsList = ({ reviews }) => (
  <ul className="reviews-list">
    {reviews.map((review) => (
      <li key={review.id} className="reviews-list-item">
        <p className="reviews-list-item-name">
          <b>Author:</b> {review.author}
        </p>
        <p>{review.content}</p>
      </li>
    ))}
  </ul>
);

export default ReviewsList;
