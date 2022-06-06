import React, { useState } from "react";
import AddForm from "./AddForm";
import Cart from "./Cart";
import ProductListing from "./ProductListing";

let productList = [
  {
    id: 1,
    title: "Amazon Kindle E-reader",
    quantity: 5,
    price: 79.99,
  },
  {
    id: 2,
    title: "Apple 10.5-Inch iPad Pro",
    quantity: 3,
    price: 649.99,
  },
  {
    id: 3,
    title: "Yamaha Portable Keyboard",
    quantity: 2,
    price: 155.99,
  },
  {
    id: 4,
    title: "Tinker, Tailor, Soldier, Spy - A John le Carre Novel",
    quantity: 12,
    price: 13.74,
  },
];

const App = () => {
  let [cartItems, setCartItems] = useState([])
  let [products, setProducts] = useState(productList);
  let [newProduct, setNewProduct] = useState({})


  return (
    <div id="app">
      <header>
        <Cart cartItems={cartItems} />
        <ProductListing products={products} />
        <AddForm product={newProduct} />
      </header>
    </div>
  );
};

export default App;
