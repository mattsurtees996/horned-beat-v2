import { useState } from "react";

export default function HornedBeast({ title, imageURL, description }) {
  const [votes, setVotes] = useState(0);

  function handleVote() {
    setVotes(votes + 1);
  }

  return (
    <div className="horned-beasts">
      <h2>{title}</h2>
      <img src={imageURL} alt="" onClick={handleVote} />
      <p>{description}</p>
      <p>❤️ {votes} </p>
    </div>
  );
}
