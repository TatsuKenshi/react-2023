import React, { useReducer } from "react";
import { data } from "../../../data";
import reducer from "./reducer";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";

// default state (defaultState is the conventional name)
const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  // invoke useReducer
  // // state is the state we want to update
  // // dispatch is the function that "updates" the state but,
  // // as opposed to setState, it doesn't update the state directly
  // // instead, reducer function updates according to dispatch's action
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // dispatch function sends an object to the reducer
    // type: "ACTION_NAME" is mandatory
    // payload object is the second, optional property
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
