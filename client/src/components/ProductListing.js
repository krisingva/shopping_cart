import EditableProduct from "./EditableProduct";

const ProductListing = ({ products }) => {
    return (
      <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
        <div className="product">
          <EditableProduct product={product} />
        </div>
        )
      })}
    </div>
    )
  }

export default ProductListing;