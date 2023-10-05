import { useState } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import Form from "./Form";
import Items from "./Items";

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(defaultList);
  const [disableForm, setDisableForm] = useState(false);
  const [editItemID, setEditItemID] = useState("");

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      complete: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item added to the list");
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("item removed from the list");
  };

  const toggleComplete = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, complete: !item.complete };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const renameItem = (id, newName) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, name: newName, complete: false };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const allNames = [...new Set(items.map((item) => item.name))];

  return (
    <section className="section-center">
      <ToastContainer position={"top-center"} />
      <Form addItem={addItem} disableForm={disableForm} />
      <Items
        items={items}
        removeItem={removeItem}
        toggleComplete={toggleComplete}
        renameItem={renameItem}
        setDisableForm={setDisableForm}
        editItemID={editItemID}
        setEditItemID={setEditItemID}
        allNames={allNames}
      />
    </section>
  );
};

export default App;
