import React from "react";
import SingleItem from "./SingleItem";

const Items = ({
  items,
  removeItem,
  toggleComplete,
  renameItem,
  setDisableForm,
  editItemID,
  setEditItemID,
  allNames,
}) => {
  if (items.length < 1) {
    return (
      <div className="items" style={{ textAlign: "center" }}>
        <h4>grocery bud is empty</h4>
      </div>
    );
  }

  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            toggleComplete={toggleComplete}
            renameItem={renameItem}
            setDisableForm={setDisableForm}
            editItemID={editItemID}
            setEditItemID={setEditItemID}
            allNames={allNames}
          />
        );
      })}
    </div>
  );
};

export default Items;
