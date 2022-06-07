import EditableProduct from "./EditableProduct";

const ProductListing = ({ products, onHandleDelete, onHandleUpdate, title, setTitle, price, setPrice, quantity, setQuantity }) => {
  console.log(products)
    return (
      <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <div className="product" key={product.id}>
            <EditableProduct product={product} onHandleDelete={onHandleDelete} onHandleUpdate={onHandleUpdate} title={title} setTitle={setTitle} price={price} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity}/>
          </div>
        )
      })}
    </div>
    )
  }

export default ProductListing;