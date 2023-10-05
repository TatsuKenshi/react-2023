import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem, disableForm }) => {
  const [newItemName, setNewItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("Please provide value");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <>
        {!disableForm ? <h4>Grocery Bud</h4> : <h4>Rename Item</h4>}
        <div className="form-control">
          <input
            disabled={disableForm === true ? true : false}
            type="text"
            className="form-input"
            value={newItemName}
            onChange={(e) => {
              setNewItemName(e.target.value);
            }}
          />
          <button
            type="submit"
            className="btn"
            disabled={disableForm === true ? true : false}
          >
            add item
          </button>
        </div>
      </>
    </form>
  );
};

export default Form;
