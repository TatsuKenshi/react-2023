import React, { useState } from "react";
import { people } from "../../../data";
import Person from "./Person";
console.log(people);

const List = () => {
  console.log(people[2].images[0].small.url);

  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};

export default List;
