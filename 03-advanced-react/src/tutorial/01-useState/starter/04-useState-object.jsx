import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    hobby: "kendo",
    background: "blue",
  });

  const switchPerson = () => {
    if (person.name === "Peter") {
      setPerson({
        name: "John",
        age: 25,
        hobby: "iaido",
        background: "red",
      });
    } else {
      setPerson({
        name: "Peter",
        age: 24,
        hobby: "kendo",
        background: "blue",
      });
    }

    console.log(person);
  };

  const { name, age, hobby, background } = person;

  return (
    <>
      <h2>useState object example</h2>

      <div className="item">
        <p>user name: {name}</p>
        <p>user age: {age}</p>
        <p>user activity: {hobby}</p>
        <button
          type="button"
          className="btn"
          onClick={switchPerson}
          style={{
            background: `${background}`,
          }}
        >
          switch user
        </button>
      </div>
    </>
  );
};

export default UseStateObject;

// In React, "batching" refers to the process of grouping multiple state updates into a single one. This is useful because it allows React to optimize the rendering of components by minimizing the number of DOM updates that it has to perform.

// By default, React uses a technique called "auto-batching" to group state updates that occur within the same event loop into a single update. This means that if you call the state update function multiple times in a short period of time, React will only perform a single re-render for all of the updates.

// React 18 ensures that state updates invoked from any location will be batched by default. This will batch state updates, including native event handlers, asynchronous operations, timeouts, and intervals.
