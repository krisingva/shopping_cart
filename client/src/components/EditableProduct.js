import { useState } from 'react';
import Product from './Product';
import EditForm from './EditForm';

const EditableProduct = ( {product, onHandleDelete, onHandleUpdate, title, setTitle, price, setPrice, quantity, setQuantity}) => {
  let [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = () => {
    setShowEdit(!showEdit)
  }

  return (
    <div>
      <Product product={product} onHandleShowEdit={handleShowEdit} onHandleDelete={onHandleDelete} />
      {showEdit && <EditForm product={product} onHandleUpdate={onHandleUpdate} title={title} setTitle={setTitle} price={price} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} />}
    </div>
  )
}

export default EditableProduct