import React from "react";

const NonEditedItem = ({ item }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.complete && "line-through",
          color: item.complete && "crimson",
        }}
      >
        {item.name}
      </p>
      <p>
        <button
          style={{ marginRight: "5px" }}
          type="button"
          className="btn"
          disabled
        >
          edit
        </button>

        <button type="button" className="btn" disabled>
          Delete
        </button>
      </p>
    </div>
  );
};

export default NonEditedItem;
