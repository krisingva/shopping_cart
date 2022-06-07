const EditForm = ({ product, onHandleUpdate, title, setTitle, price, setPrice, quantity, setQuantity }) => {
  const handleTitleChange = (e) => {
      setTitle(e.target.value)
  }
    
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault()
    onHandleUpdate(e.target.id, title, price, quantity)
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleUpdate} id={product._id}>
        <div className="input-group">
          <label for="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            onChange={handleTitleChange}
            value={product.title}
          ></input>
        </div>

        <div className="input-group">
          <label for="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            onChange={handlePriceChange}
            value={product.price}
          ></input>
        </div>

        <div className="input-group">
          <label for="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            onChange={handleQuantityChange}
            value={product.quantity}
          ></input>
        </div>

        <div className="actions form-actions">
          <a className="button">Update</a>
          <a className="button">Cancel</a>
        </div>
      </form>
    </div>
  );
}

export default EditForm;