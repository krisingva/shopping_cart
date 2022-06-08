import { useState } from "react";

const AddProduct = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [addingProduct, setAddingProduct] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({title, quantity, price}, resetInputs());
  }

  const resetInputs = () => {
    setTitle("");
    setQuantity("");
    setPrice("");
  };

  const handleAddingProduct = () => {
    setAddingProduct(!addingProduct);
  }

  const handleCancel = () => {
    if (addingProduct) {
      setAddingProduct(!addingProduct);
    }
  }
  if (!addingProduct) {
    return (
      <div class="actions form-actions">
        <p><button class="button add-product-button" onClick={handleAddingProduct}>Add A Product</button></p>
    </div>
    )
  }

  return (
    <div class="add-form.visible">
        <p><a class="button add-product-button">Add A Product</a></p>
        <h3>Add Product</h3>
        <form onSubmit={handleSubmit}>
          <div class="input-group">
            <label for="product-name">Product Name</label>
            <input type="text" id="product-name" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div class="input-group">
            <label for="product-price">Price</label>
            <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>

          <div class="input-group">
            <label for="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>

          <div class="actions form-actions">
            <button class="button" type="submit">Add</button>
            <button class="button" type="submit" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
  );
}

export default AddProduct;