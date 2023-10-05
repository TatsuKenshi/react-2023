import React from "react";

const RegularItem = ({
  item,
  removeItem,
  toggleComplete,
  setDisableForm,
  setEditItemID,
}) => {
  console.log(item);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.complete}
        onChange={() => toggleComplete(item.id)}
      />

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
          onClick={() => {
            setEditItemID(item.id);
            setDisableForm(true);
          }}
        >
          edit
        </button>

        <button
          type="button"
          className="btn"
          onClick={() => removeItem(item.id)}
        >
          Delete
        </button>
      </p>
    </div>
  );
};

export default RegularItem;
