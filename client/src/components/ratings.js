import { React, useState, useEffect } from "react";
const Ratings = (props) => {
  const [id, rating] = props.video;
  const [ratings, setRatings] = useState(rating);
  const IncrementRating = () => {
    const Rater = () => {
      fetch(`http://localhost:3000/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating: ratings,
        }),
      });
    };

    useEffect(() => {
      Rater();
    });
    return (
      <span>
        <button onClick={(e) => setRatings(ratings + 1)}>UP</button>
        <span>
          <p>{ratings}</p>
        </span>
        <button onClick={(e) => setRatings(ratings - 1)}>DOWN</button>
      </span>
    );
  };

  return <IncrementRating />;
};
export default Ratings;
