import React from 'react';

function Product({ index, item, changeQty }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <input name={index} value={item.quantity} onChange={changeQty} />
    </div>
  );
}

export default Product;
