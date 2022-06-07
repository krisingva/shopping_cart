import Product from './Product'
const ProductList = ({ productList, onDelete }) => {
  return (
    <div class="product-listing">
        <h2>Products</h2>
        {productList.map(product => {
          return <Product key={product.id} product={product} onDelete={onDelete}/>;
        })}
    </div>
  )
}

export default ProductList;
