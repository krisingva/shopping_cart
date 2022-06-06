import { useState } from 'react';
import Product from './Product';
import EditForm from './EditForm';

const EditableProduct = ( {product}) => {
  let [visible, setVisible] = useState("not visible")

  return (
    <div>
      <Product product={product} />
      <EditForm product={product} />
    </div>
  )
}

export default EditableProduct