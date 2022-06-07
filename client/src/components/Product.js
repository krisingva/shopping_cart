const Product = ({ product, onHandleShowEdit, onHandleDelete }) => {
  console.log(product.title, product.price, product.quantity, product.id)

  const handleEditProduct = (e) => {
    e.preventDefault()
    onHandleShowEdit()
  }

  const handleDelete = (e) => {
    e.preventDefault()
    onHandleDelete(e.target.id)
  }

  return (
    <div className="product-details">
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="quantity">{product.quantity} left in stock</p>
      <div className="actions product-actions">
        <a className="button add-to-cart">Add to Cart</a>
        <a className="button edit" onClick={handleEditProduct}>
          Edit
        </a>
      </div>
      <a className="delete-button" onClick={handleDelete}>
        <span id={product._id}>X</span>
      </a>
    </div>
  );
}

export default Product;