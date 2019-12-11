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
  return (
    <div className='App'>
      <h1>I am starting point</h1>
      <ProductList value={items} />
    </div>
  );
}

export default App;
