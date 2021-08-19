import { React, useState, useEffect } from "react";
const Ratings = (props) => {
  const [votes, setVotes] = useState(props.rate);
  const IncrementRating = () => {
    return (
      <span>
        <button onClick={() => setVotes(votes + 1)}>UP</button>
        <span>
          <p>{votes}</p>
        </span>
        <button onClick={() => setVotes(votes - 1)}>DOWN</button>
      </span>
    );
  };

  return <IncrementRating />;
};
export default Ratings;
