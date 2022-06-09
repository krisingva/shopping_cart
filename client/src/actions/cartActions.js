export const cartReceived = (cartItems) => {
  return {type: "CART_ITEMS_RECEIVED", payload: cartItems}
}

export const cartItemAdded = (cartItem) => {
  return { type: "CART_ITEM_ADDED", payload: cartItem}
}

export const checkoutCart = (newCart) => {
  return { type: "CHECKED_OUT", payload: newCart }
}