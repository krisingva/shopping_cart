import { useState } from 'react';
import Product from './Product';
import EditForm from './EditForm';

const EditableProduct = ({ product, onHandleDelete, onHandleUpdate, onHandleAddItem }) => {
  let [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div>
      <Product
        product={product}
        onHandleShowEdit={handleShowEdit}
        onHandleDelete={onHandleDelete}
        onHandleAddItem={onHandleAddItem}
      />
      {showEdit && (
        <EditForm
          product={product}
          onHandleUpdate={onHandleUpdate}
          handleShowEdit={handleShowEdit}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
        />
      )}
    </div>
  );
};

export default EditableProduct