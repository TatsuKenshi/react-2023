import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>useState basics</h2>
      <div>
        <h2>{count}</h2>
        {/* invoke the function */}
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
          className="btn"
        >
          increase
        </button>

        {/* function reference */}
        <button type="button" onClick={handleClick} className="btn">
          increase too
        </button>
      </div>
    </>
  );
};

export default UseStateBasics;

// useState returns an array with two elements - the current state and the update function.

// useState accepts default value as an argument (number, string, boolean, object, array, etc).

// each update triggers re-render which updates the affected component(s).

// value is preserved between re-renders.
