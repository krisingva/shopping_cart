import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { editProduct } from '../features/products';

const EditForm = ({ product, showEdit, setShowEdit }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleTitleChange = (e) => {
      setTitle(e.target.value)
  }
    
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const clearFields = () => {
    setTitle('')
    setPrice('')
    setQuantity('')
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      quantity,
    };

    dispatch(editProduct({ product, newProduct }));
    
    clearFields();
    handleShowEdit();
  }

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
          <label htmlFor="product-price">Price</label>
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
          <a href="/#" className="button" onClick={(e) => handleUpdate(e, clearFields)}>
            Update
          </a>
          <a href="/#" className="button" onClick={() => setShowEdit(!showEdit)}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}

export default EditForm;