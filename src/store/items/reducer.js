import produce from 'immer';
import {
  ADDED_ITEM,
  REMOVE_ITEM,
  PRICE_UPDATE_ITEM,
  QUANTITY_UPDATE_ITEM
} from './actions';

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = produce((state = initialItems, action) => {
  if (action.type === ADDED_ITEM) {
    const item = { uuid: id++, quantity: 1, ...action.payload };

    state.push(item);
  }

  if (action.type === REMOVE_ITEM) {
    return state.filter((item) => item.uuid !== action.payload.uuid);
  }

  if (action.type === PRICE_UPDATE_ITEM) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.price = parseInt(action.payload.price, 10);
  }

  if (action.type === QUANTITY_UPDATE_ITEM) {
    const item = state.find((item) => item.uuid === action.payload.uuid);
    item.quantity = parseInt(action.payload.quantity, 10);
  }
}, initialItems);

export default reducer;
