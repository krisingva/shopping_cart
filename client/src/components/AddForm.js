import { useState } from 'react'

const AddForm = ({ onHandleSubmit }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

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
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onHandleSubmit(title, price, quantity, clearFields)
    // if (clearFields) {
    //   clearFields()
    // }
  }

  return (
    <div className="add-form visible">
      <p>
        <a className="button add-product-button">Add A Product</a>
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
        <a onClick={handleSubmit} type="submit" className="button">Add</a>
          <a className="button">Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default AddForm