import React from "react";
import { useState } from "react";


const Product = ( {product, onDelete, onAddToCart, onUpdate } ) => {
  const [title, setTitle] = useState(product.title);
  const [quantity, setQuantity] = useState(product.quantity);
  const [price, setPrice] = useState(product.price);
  const [edit, setEdit] = useState(false);

  const handleDisplayEdit = () => {
    setEdit(!edit);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate(product._id, {title, quantity, price}, handleDisplayEdit);
  }

  if (!edit) {
    return (
      <div class="product">
      <div class="product-details">
        <h3>{product.title}</h3>
        <p class="price">{product.price}</p>
        <p class="quantity">{product.quantity} left in stock</p>
        <div class="actions product-actions">
          <button class="button add-to-cart" onClick={onAddToCart(product._id)}>Add to Cart</button>
          <button class="button edit" onClick={handleDisplayEdit}>Edit</button>
        </div>
        <button class="delete-button" onClick={onDelete(product._id)}><span>X</span></button>
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