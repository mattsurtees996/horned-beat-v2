import React from "react";

export default function HornedBeast({ title, imageURL, description }) {
  return (
    <div className="horned-beasts">
      <h2>{title}</h2>
      <img src={imageURL} alt="" />
      <p>{description}</p>
    </div>
  );
}
