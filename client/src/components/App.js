import React, { useEffect, useState } from "react";
import AddForm from "./AddForm";
import Cart from "./Cart";
import ProductListing from "./ProductListing";
import productService from '../services/productService'
import cartService from '../services/cartService'

// remove later
import { productsReceived } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  return (
    <div id="app">
      <Cart />
      <main>
        <ProductListing />
        <AddForm />
      </main>
    </div>
  );
};

export default App;
