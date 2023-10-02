import { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log("hello there");
  };

  sayHello();

  useEffect(() => {
    console.log("hello from useEffect");
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;

// useEffect is a hook that allows you to perform side effects in function components, such as subscription, fetching data, directly updating DOM, event listeners, timers, etc.

// useEffect accepts two arguments (second is optional)
// first argument is the callback function
// second argument is dependency array
// by default, useEffect runs on each render
// callback function can't return promises (be async)
// but, we can set up async functions within the callback
// if dep array is empty, the effect runs only on initial render
// if dep array is not empty, the effect runs on the initial render and every time one of the dependencies changes
