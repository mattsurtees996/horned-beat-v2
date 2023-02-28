import React from "react";
import HornedBeast from "./HornedBeast";
import data from "../data.json";

export default function Main() {
  return (
    <main>
      {data.map((beast) => {
        return (
          <HornedBeast
            title={beast.title}
            imageURL={beast.image_url}
            description={beast.description}
          />
        );
      })}

      <HornedBeast
        title="Smaug"
        imageURL="https://qph.cf2.quoracdn.net/main-qimg-d7cceaac6251d5e158e25165e380e606-lq"
        description="Smaug be stealin"
      />
      <HornedBeast
        title="Rhino"
        imageURL="https://i.pinimg.com/originals/dc/0e/56/dc0e563bea51db424948647d233cb6d0.jpg"
        description="The team name that key and peele always use in sketches"
      />
    </main>
  );
}
