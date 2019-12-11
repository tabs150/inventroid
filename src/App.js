import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  const [items, setItems] = useState([
    {
      item: 'Castle Lite',
      volume: 660,
      inStock: false,
      quantity: 0
    },
    {
      item: 'Castle Larger',
      volume: 750,
      inStock: false,
      quantity: 0
    },
    {
      item: 'Black Label',
      volume: 750,
      inStock: false,
      quantity: 0
    },
    {
      item: 'Hansa Pilsener',
      volume: 750,
      inStock: false,
      quantity: 0
    }
  ]);
  return (
    <div className='App'>
      <h1>I am starting point</h1>
      <ProductList />
    </div>
  );
}

export default App;
