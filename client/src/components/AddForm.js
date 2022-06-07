
const AddForm = ({ onHandleSubmit, title, setTitle, price, setPrice, quantity, setQuantity }) => {
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

  const handleSubmit = (e, clearFields) => {
    e.preventDefault()
    onHandleSubmit(title, price, quantity)
    if (clearFields) {
      clearFields()
    }
  }

  return (
    <div className="add-form visible">
      <p>
        <a className="button add-product-button">Add A Product</a>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={(e) => handleSubmit(e, clearFields)}>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input 
            type="text"
            id="product-name"
            onChange={handleTitleChange}
            value={title}>
          </input>
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input 
            type="text" 
            id="product-price"
            onChange={handlePriceChange}
            value={price}>
          </input>
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input 
            type="text" 
            id="product-quantity" 
            onChange={handleQuantityChange}
            value={quantity}>
          </input>
        </div>

        <div className="actions form-actions">
          <button type="submit" className="button">Add</button>
          <a className="button">Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default AddForm