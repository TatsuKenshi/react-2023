import React, { useState } from "react";
import { toast } from "react-toastify";

const EditForm = ({
  setDisableForm,
  item,
  renameItem,
  setEditItemID,
  allNames,
}) => {
  const [rename, setRename] = useState("");

  const handleRenameSubmit = (e) => {
    e.preventDefault();

    if (rename) {
      if (rename === item.name) {
        setRename("");
        toast.error("Please provide a new value");
      } else if (allNames.includes(rename)) {
        setRename("");
        toast.error("No duplicates");
      } else {
        renameItem(item.id, rename);
        setDisableForm(false);
        setRename("");
        setEditItemID("");
        toast.success("Item successfully renamed");
      }
    } else {
      toast.error("Please provide value");
    }
  };

  return (
    <>
      <form onSubmit={handleRenameSubmit}>
        <div className="form-control">
          <input
            className="form-input"
            type="text"
            value={rename}
            name="rename"
            id="rename"
            onChange={(e) => setRename(e.target.value)}
          />
          <button type="submit" className="btn">
            update
          </button>
        </div>
      </form>
      <div>
        <button
          type="button"
          className="btn"
          onClick={() => {
            setRename("");
            setDisableForm(false);
            setEditItemID("");
          }}
        >
          cancel
        </button>
      </div>
    </>
  );
};

export default EditForm;
