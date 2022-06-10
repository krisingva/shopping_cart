import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cart from './Cart';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import axios from 'axios';
import { productsReceived } from "../actions/productListActions";
import { cartReceived } from "../actions/cartActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      dispatch(productsReceived(data));
    };
    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    const fetchCart = async () => {
      const { data } = await axios.get("/api/cart");
      dispatch(cartReceived(data));
    };
    fetchCart();
  }, [dispatch]);

  return (
    <>
      <div id="app">
    <header>
      <Cart />
    </header>

    <main>
      <ProductList />
      <AddProduct />
    </main>
  </div>
    </>
  );
};

export default App;
