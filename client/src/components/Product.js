const Product = ({ product, onHandleShowEdit, onHandleDelete, onHandleAddItem }) => {
  const handleEditProduct = (e) => {
    e.preventDefault()
    onHandleShowEdit()
  }

  const handleDelete = (e) => {
    e.preventDefault()
    onHandleDelete(product._id)
  }

  const handleAddToCart = (e) => {
    e.preventDefault()
    onHandleAddItem(product._id)
  }

  return (
    <div className="product-details">
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="quantity">{product.quantity} left in stock</p>
      <div className="actions product-actions">
        <a className={`button add-to-cart ${product.quantity === 0 ? 'disabled' : ''}`} onClick={handleAddToCart}>Add to Cart</a>
        <a className="button edit" onClick={handleEditProduct}>
          Edit
        </a>
      </div>
      <a className="delete-button" onClick={handleDelete}>
        <span>X</span>
      </a>
    </div>
  );
}

export default Product;