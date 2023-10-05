import React from "react";
import EditForm from "./EditForm";

const EditedItem = ({
  item,
  renameItem,
  setDisableForm,
  editItemID,
  setEditItemID,
  allNames,
}) => {
  return (
    <div className="single-item">
      <p
        style={{
          textTransform: "capitalize",
          color: "blue",
        }}
      >
        {item.name}
      </p>

      <EditForm
        setDisableForm={setDisableForm}
        item={item}
        renameItem={renameItem}
        editItemID={editItemID}
        setEditItemID={setEditItemID}
        allNames={allNames}
      />
    </div>
  );
};

export default EditedItem;
