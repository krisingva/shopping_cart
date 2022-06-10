import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartService from '../services/cartService';

const initialState = [];

export const getCart = createAsyncThunk(
  "/cart/getCart",
  async () => {
    const cartItems = await cartService.getCartItems();
    return cartItems
  }
)

export const addToCart = createAsyncThunk(
  "/cart/addToCart",
  async (arg) => {
    const {product} = arg
    const data = await cartService.addCartItem(product._id)
    return data;
  }
)

export const cartCheckout = createAsyncThunk(
  "/cart/cartCheckout",
  async () => {
    const data = await cartService.cartCheckout();
    return data
  }
)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      return action.payload;
    })
    builder.addCase(addToCart.fulfilled, (state, action) => {
      if (state.length === 0) {
        return [action.payload.item]
      } else if (state.filter((item) => item.productId === action.payload.item.productId).length === 1) {
        return state.map((item) => {
          if (item.productId === action.payload.item.productId) {
            return action.payload.item;
          } else {
            return item;
          }
        })
      } else {
        return state.concat(action.payload.item);
      }
    })
    builder.addCase(cartCheckout.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

export default cartSlice.reducer;