import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";
import { data } from "../../../data";

// function that updates the current and returns new state
// reducer is the conventional name
// it receives two params - state and action
// state to update and action which tells it what to do with the state
const reducer = (state, action) => {
  // in reducer, we use if/switch syntax to discern between actions
  // and perform corresponding state updates
  if (action.type === CLEAR_LIST) {
    // spread the entire state and only change the desired one
    return { ...state, people: [] };
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }

  if (action.type === REMOVE_ITEM) {
    const id = action.payload.id;
    // if you're filtering an array from the state,
    // state.array.filter((item)=>...)
    let newPeople = state.people.filter((person) => person.id !== id);
    return { ...state, people: newPeople };
  }

  // reducer has to return state in case there was no valid action
  // return state

  // alternatively, we can throw an error
  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
