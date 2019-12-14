import React from 'react';
import ProductItem from './ProductItem';

function Product({ index, item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <ProductItem value={item} />
    </div>
  );
}

export default Product;
