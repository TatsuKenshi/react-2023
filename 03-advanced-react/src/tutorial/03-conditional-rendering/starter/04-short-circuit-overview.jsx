import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy state
  const [text, setText] = useState("");
  // truthy state
  const [name, setName] = useState("Susan");

  return (
    <div>
      <h4>Falsy OR : {text || "hello world"}</h4>
      {/* output: hello world */}
      <h4>Falsy AND : {text && "hello world"}</h4>
      {/* output:  */}
      <h4>Truthy OR : {name || "hello world"}</h4>
      {/* output: Susan */}
      <h4>Truthy AND : {name && "hello world"}</h4>
      {/* output: hello world */}
    </div>
  );
};
export default ShortCircuitOverview;
