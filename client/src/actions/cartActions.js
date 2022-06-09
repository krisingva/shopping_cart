export const checkout = () => {
  return {type: 'CHECKOUT'};
}

export const productAddedToCart = (product) => {
  return {type: 'PRODUCT_ADDED_TO_CART', payload: product};
}

export const cartReceived = (cartItems) => {
  return {type: 'CART_RECEIVED', payload: cartItems };
}