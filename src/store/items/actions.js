export const ADDED_ITEM = 'ADDED_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const addNewItem = (name, price) => ({
  type: ADDED_ITEM,
  payload: {
    name,
    price
  }
});

export const removeItem = (uuid) => ({
  type: REMOVE_ITEM,
  payload: {
    uuid
  }
});
