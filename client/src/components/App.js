import React from "react";
import AddForm from "./AddForm";
import Cart from "./Cart";
import ProductListing from "./ProductListing";
import { CartProvider } from "../context/cart-context";

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
