import { useState, useEffect } from "react";

const Example = () => {
  const [condition, setCondition] = useState(true);
  // if (condition) {
  //   // won't work
  //   const [state, setState] = useState(false);
  // }

  if (condition) {
    return <h2>Hello There</h2>;
  }
  // this will also fail
  useEffect(() => {
    console.log("hello there");
  }, []);
  return <h2>example</h2>;
};

export default Example;

// never call hooks conditionally, they always, always need to be called in the same order.

// useState, useEffect, and the other hooks must always preceed the multiple returns.
