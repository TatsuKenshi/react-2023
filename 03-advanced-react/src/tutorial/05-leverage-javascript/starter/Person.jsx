import React from "react";
import avatar from "../../../assets/default-avatar.svg";

const Person = ({ name, nickName = "no nickname", images }) => {
  // my attempt at destructuring the image
  //   const img = person.images ? person.images[0].small.url : null;

  // optional (daisy) chaining
  //   const img =
  //     person &&
  //     person.images &&
  //     person.images[0] &&
  //     person.images[0].small &&
  //     person.images[0].small.url;

  // optional chaining + OR
  //   const img = person?.images?.[0]?.small?.url || avatar;

  // optional chaining + nullish coalescent operator
  const img = images?.[0]?.small?.url ?? avatar;

  return (
    <div style={{ background: "lavender", marginBottom: "5px" }}>
      <h2> Name : {name || "no name provided"}</h2>
      <img src={img} alt={name} style={{ width: "50px" }} />
      <h4>Nickname : {nickName || "no nickname"}</h4>
    </div>
  );
};

export default Person;
