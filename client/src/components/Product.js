import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productAdded, productRemoved, productUpdated, productAddedToCart } from "../actions/productListActions";
import axios from 'axios';


const Product = ( {product, onDelete, onAddToCart, onUpdate } ) => {
  const [title, setTitle] = useState(product.title);
  const [quantity, setQuantity] = useState(product.quantity);
  const [price, setPrice] = useState(product.price);
  const [edit, setEdit] = useState(false);

  //

  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    const id = product._id;
    await axios.delete(`/api/products/${id}`);
    dispatch(productRemoved(id));
  };

  const handleAddToCart = async ()=> {
    const id = product._id;
    if (product.quantity) {
      const results = await axios.post(`/api/add-to-cart`, {productId: id});
      console.log('results', results);
      dispatch(productAddedToCart(results.data));
    }
  }

  const handleDisplayEdit = () => {
    setEdit(!edit);
  }

  const handleUpdate = async (e) => {
      e.preventDefault();
      const {data} = await axios.put(`/api/products/${product._id}`,  {title, quantity, price});
      dispatch(productUpdated(data));


      handleDisplayEdit();
}

  if (!edit) {
    return (
      <div class="product">
      <div class="product-details">
        <h3>{product.title}</h3>
        <p class="price">{product.price}</p>
        <p class="quantity">{product.quantity} left in stock</p>
        <div class="actions product-actions">
          <button class="button add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
          <button class="button edit" onClick={handleDisplayEdit}>Edit</button>
        </div>
        <button class="delete-button" onClick={handleDelete}><span>X</span></button>
      </div>
    </div>
    );
  }
  return (
    <div class="product">
    <div class="product-details">
      <h3>{product.title}</h3>
      <p class="price">{product.price}</p>
      <p class="quantity">{product.quantity} left in stock</p>
      <div class="edit-form">
            <h3>Edit Product</h3>
            <form onSubmit={handleUpdate}>
              <div class="input-group">
                <label for="product-name">Product Name</label>
                <input type="text" id="product-name" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>

              <div class="input-group">
                <label for="product-price">Price</label>
                <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)}/>
              </div>

              <div class="input-group">
                <label for="product-quantity">Quantity</label>
                <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
              </div>
              <div class="actions form-actions">
                <button class="button" type="submit">Update</button>
                <button class="button" onClick={handleDisplayEdit}>Cancel</button>
              </div>
            </form>
          </div>
    </div>
    </div>
  );
};

export default Product;