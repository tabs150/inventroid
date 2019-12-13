import React from 'react';

function ProductItem({ value }) {
  return (
    <div>
      <h4>{value.volume}</h4>
    </div>
  );
}

export default ProductItem;
