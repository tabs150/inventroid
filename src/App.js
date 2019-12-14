import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  const [items, setItems] = useState([
    {
      name: 'Castle Lite',
      volume: 660,
      inStock: false,
      quantity: 0
    },
    {
      name: 'Castle Larger',
      volume: 750,
      inStock: false,
      quantity: 0
    },
    {
      name: 'Black Label',
      volume: 750,
      inStock: false,
      quantity: 0
    },
    {
      name: 'Hansa Pilsener',
      volume: 750,
      inStock: false,
      quantity: 0
    }
  ]);

  const changeQty = e => {
    const {
      target: { value, name }
    } = e;

    let index = Number(name);
    const newItems = [...items];
    newItems[index].quantity = Number(value);
    setItems(newItems);
  };

  return (
    <div className='App'>
      <h1>I am starting point</h1>
      <ProductList value={items} changeQty={changeQty} />
    </div>
  );
}

export default App;
