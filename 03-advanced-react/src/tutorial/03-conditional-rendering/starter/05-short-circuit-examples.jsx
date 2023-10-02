import { useState } from "react";

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "default value"}</h2>
      <h2>{name || "default value"}</h2>
      {text && (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
        // div won't show, text state is falsy
      )}

      {!text && (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
        // div shows, we truthfuly claimed text state was falsy
      )}

      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: "3rem 0" }}>Ternary Operator</h2>
      <button type="button" className="btn">
        {isEditing ? "edit" : "add"}
      </button>
      {user ? (
        <div>
          <h2>hello there {user.name}</h2>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>whatever return</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;

// in short circuit evaluation, && (and) means "if this is true/truthy, then do/display this"

// ternary operator "?" if the condition is truthy, the first expression will be returned/rendered, otherwise, the second one will be returned/rendered.
