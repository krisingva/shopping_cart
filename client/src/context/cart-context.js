import { createContext, useReducer } from 'react';
import cartService from '../services/cartService';

export const CartContext = createContext();

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "CART_ITEMS_RECEIVED":
      return action.payload
    case "ADDED_TO_CART":
      if (state.length === 0) {
          return [action.payload]
      } else if (state.filter(item => item.productId === action.payload.productId).length === 1) {
        return state.map(item => {
          if (item.productId === action.payload.productId) {
            return action.payload
          } else {
            return item;
          }
        })
      } else {
          return state.concat(action.payload)
      }
    case "CART_CHECKEDOUT":
      return action.payload
    default:
      return state
  }
}

export const getAllCartItems = async(dispatch) => {
  const cartItems = await cartService.getCartItems();
  dispatch({type: "CART_ITEMS_RECEIVED", payload: cartItems});
}

export const addItemToCart = async (product, dispatch, productDispatch) => {
    const data = await cartService.addCartItem(product._id)
    dispatch({ type: "ADDED_TO_CART", payload: data.item })
    productDispatch({ type: "PRODUCT_UPDATED", payload: data.product })
}

export const checkoutCartItems = async (dispatch) => {
  await cartService.cartCheckout();
  dispatch({type: "CART_CHECKEDOUT", payload: []})
}

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, [])

  return (
    <CartContext.Provider value={{ cartItems, dispatch }}>
      { children }
    </CartContext.Provider>
  )
}