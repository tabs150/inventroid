import React from 'react';
import Product from './Product';

function ProductList({ value, changeQty }) {
  return (
    <div>
      <h2>I display ProductList</h2>
      {value.map((item, index) => (
        <Product
          key={index}
          index={index}
          item={item}
          changeQty={changeQty}
        />
      ))}
    </div>
  );
}

export default ProductList;
