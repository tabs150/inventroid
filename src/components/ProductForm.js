import React, { useState } from 'react';

const ProductForm = ({ changeQty }) => {
  const [value, setValue] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    changeQty(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='number'
        className='quantity'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

export default ProductForm;
