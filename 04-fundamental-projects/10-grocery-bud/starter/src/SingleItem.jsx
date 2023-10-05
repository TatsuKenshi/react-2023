import React from "react";
import RegularItem from "./RegularItem";
import EditedItem from "./EditedItem";
import NonEditedItem from "./NonEditedItem";
import EditForm from "./EditForm";

const SingleItem = ({
  item,
  removeItem,
  toggleComplete,
  renameItem,
  setDisableForm,
  editItemID,
  setEditItemID,
  allNames,
}) => {
  return (
    <>
      {!editItemID ? (
        <RegularItem
          toggleComplete={toggleComplete}
          setEditItemID={setEditItemID}
          setDisableForm={setDisableForm}
          removeItem={removeItem}
          item={item}
        />
      ) : editItemID === item.id ? (
        <EditedItem
          item={item}
          removeItem={removeItem}
          toggleComplete={toggleComplete}
          renameItem={renameItem}
          setDisableForm={setDisableForm}
          editItemID={editItemID}
          setEditItemID={setEditItemID}
          allNames={allNames}
        />
      ) : (
        <NonEditedItem item={item} />
      )}
    </>
  );
};

export default SingleItem;
