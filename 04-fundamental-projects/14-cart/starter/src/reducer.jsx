import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE) {
    // make a new cart Map
    const newCart = new Map(state.cart);
    // destructure the id from the payload
    const itemId = action.payload.id;
    // make a copy of the item you want to alter
    const item = newCart.get(itemId);
    // alter the prop {...item, desiredProp: item.desiredProp: newValue}
    const newItem = { ...item, amount: item.amount + 1 };
    // add the altered item (newItem) to the new cart map (newCart)
    newCart.set(itemId, newItem);
    // return
    return { ...state, cart: newCart };
  }

  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);

    // check if amount is already 1
    // if so, delete it and return new state
    if (item.amount === 1) {
      newCart.delete(itemId);
      return { ...state, cart: newCart };
    }

    // if no, decrease the amount and return new state
    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  }

  if (action.type === LOADING) {
    return { ...state, isLoading: true };
  }

  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]));
    return { ...state, isLoading: false, cart: newCart };
  }

  throw new Error(`No matching action type for : ${action.type}`);
};

export default reducer;
