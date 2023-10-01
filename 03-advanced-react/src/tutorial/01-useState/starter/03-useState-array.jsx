import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <h2>useState array example</h2>
      <div>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className="item">
              <p>{name}</p>
              <button onClick={() => removeItem(id)} className="btn">
                remove {name}
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <button className="btn" onClick={() => setPeople([])}>
          clear all
        </button>
      </div>
    </>
  );
};

export default UseStateArray;

// In a react app, the initial render happens the first time the component tree is rendered to the DOM. It happens when the application first loads, or whrn the root component is first rendered. This is also known ans "mounting" the components.

// Re-renders happen when the component's state or props change, and the component needs to be updated in the DOM to reflect the changes. React uses virtual DOM to optimize the process of updating the actual DOM, so that only the necessary changes are made.

// There are a few ways to trigger a re-render in a React app:
// // - By changing the component's state or props. When the component's state or props change, React will re-render it to reflect the changes.
// // - When the parent element re-renders, even if the component's state or props haven't changed.

// Rules of hooks
// // hook names must start with lowercase "use" + the capitalized name of the hook, like "State" => useState.
// // hooks must be invoked inside function/component body
// // hooks can't be called conditionally
// // set functions don't update the state immediately, they're asynchronous
