import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      // setValue((currentValue) => {
      //   const newValue = currentValue + 1;
      //   return newValue;
      // });
      setValue((currentValue) => currentValue + 1);
    }, 3000);
  };
  return (
    <>
      <div>
        <h2>You clicked {value} times</h2>
        <button className="btn" onClick={handleClick}>
          click me
        </button>
      </div>
    </>
  );
};

export default UseStateGotcha;
