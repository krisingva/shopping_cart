import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addProduct } from '../features/products';

const AddForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  let [addFormVisible, setAddFormVisible] = useState(false);
  
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value); 
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

  const clearFields = () => {
    setTitle('')
    setPrice('')
    setQuantity('')
    setAddFormVisible(false)
  }

   const handleSubmit = (e) => {
     e.preventDefault()
     
    const newProduct = {
      title,
      price,
      quantity,
    };

    dispatch(addProduct({ newProduct }))
    clearFields()
  }

  return (
    <div className={`add-form ${addFormVisible ? 'visible' : ''}`}>
      <p>
        <a href="/#" className="button add-product-button" onClick={() => setAddFormVisible(!addFormVisible)}>Add A Product</a>
      </p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input 
            type="text"
            id="product-name"
            onChange={handleTitleChange}
            value={title}>
          </input>
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input 
            type="text" 
            id="product-price"
            onChange={handlePriceChange}
            value={price}>
          </input>
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input 
            type="text" 
            id="product-quantity" 
            onChange={handleQuantityChange}
            value={quantity}>
          </input>
        </div>

        <div className="actions form-actions">
        <a href="/#" onClick={handleSubmit} type="submit" className="button">Add</a>
          <a href="/#" className="button" onClick={clearFields}>Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default AddForm