export const checkout = () => {
  return {type: 'CHECKOUT'};
}

export const cartReceived = (cartItems) => {
  return {type: 'CART_RECEIVED', payload: cartItems };
}