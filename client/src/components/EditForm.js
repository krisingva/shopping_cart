import { useState, useContext } from 'react';
import { updateProduct, ProductContext } from '../context/products-context';

const EditForm = ({ product, onHandleShowEdit }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const { dispatch: productDispatch } = useContext(ProductContext);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const clearFields = () => {
    setTitle("");
    setPrice("");
    setQuantity("");
  };

  const handleUpdate = (e, clearFields) => {
    e.preventDefault();

    const updatedProduct = {
      title,
      price,
      quantity,
    };

    updateProduct({ updatedProduct }, productDispatch, clearFields);
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            onChange={handleTitleChange}
            value={title}
          ></input>
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            onChange={handlePriceChange}
            value={price}
          ></input>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            onChange={handleQuantityChange}
            value={quantity}
          ></input>
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={(e) => handleUpdate(e, clearFields)}>
            Update
          </a>
          <a className="button" onClick={onHandleShowEdit}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditForm;