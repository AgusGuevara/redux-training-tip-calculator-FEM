export const ADDED_ITEM = 'ADDED_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const PRICE_UPDATE_ITEM = 'PRICE_UPDATE_ITEM';
export const QUANTITY_UPDATE_ITEM = 'QUANTITY_UPDATE_ITEM';

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

export const updatePrice = (uuid, price) => ({
  type: PRICE_UPDATE_ITEM,
  payload: {
    uuid,
    price
  }
});

export const updateQuantity = (uuid, quantity) => ({
  type: QUANTITY_UPDATE_ITEM,
  payload: {
    uuid,
    quantity
  }
});
