import React from 'react';
// import ProductItem from './ProductItem';

function Product({ index, item, changeQty }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <input name={index} value={item.quantity} onChange={changeQty} />
    </div>
  );
}

export default Product;
