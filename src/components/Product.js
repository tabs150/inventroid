import React from 'react';
// import ProductItem from './ProductItem';

function Product({ index, item, changeQty }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <h5>{item.volume}ml</h5>
      <input
        type='number'
        className='quantity'
        value={item.quantity}
        onChange={() => changeQty(index, item.quantity)}
      />
    </div>
  );
}

export default Product;
