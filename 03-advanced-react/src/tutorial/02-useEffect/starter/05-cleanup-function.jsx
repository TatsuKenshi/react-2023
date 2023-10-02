import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [value, setValue] = useState(false);
  console.log("render");

  const toggleValue = () => {
    setValue(!value);
  };

  return (
    <div>
      <button type="button" className="btn" onClick={toggleValue}>
        Toggle Value
      </button>
      {value && <OtherComponent />}
    </div>
  );
};

const OtherComponent = () => {
  // interval cleanup example
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hello from interval");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // event cleanup example
  useEffect(() => {
    const someFunc = () => {
      // some logic
    };
    window.addEventListener("scroll", someFunc);

    return () => window.removeEventListener("scroll", someFunc);
  }, []);
  return (
    <div>
      <h2>This is a temporary component</h2>
    </div>
  );
};

export default CleanupFunction;
