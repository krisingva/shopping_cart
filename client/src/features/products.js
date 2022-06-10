import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from '../services/productService';
import { addToCart } from './cart'
const initialState = [];

export const fetchProducts = createAsyncThunk(
  "/products/fetchProducts",
  async () => {
    const data = await productService.getProducts();
    return data;
  }
)

export const editProduct = createAsyncThunk(
  "/products/editProduct",
  async (arg) => {
    const { product, newProduct } = arg
    const updatedProduct = await productService.updateProduct(product._id, newProduct);
    return updatedProduct
  }
)

export const deleteProduct = createAsyncThunk(
  "/products/deleteProduct",
  async (arg) => {
    const { product } = arg
    await productService.deleteProduct(product._id);
    return product;
  }
)

export const addProduct = createAsyncThunk(
  "/products/addProduct",
  async (arg) => {
    const { newProduct } = arg
    console.log(newProduct);
    const addedProduct = await productService.createProduct(newProduct)
    return addedProduct
  }
)

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload
    })
    builder.addCase(editProduct.fulfilled, (state, action) => {
      return state.map((prod) => {
        if (prod._id === action.payload._id) {
          return action.payload;
        } else {
          return prod;
        }
      });
    })
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      return state.filter(prod => prod._id !== action.payload._id)
    })
    builder.addCase(addProduct.fulfilled, (state, action) => {
      return [...state, action.payload];
    })
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const index = state.findIndex(p => p._id === action.payload.product._id)
      state[index].quantity -= 1;
    })
  }
})

export default productSlice.reducer;