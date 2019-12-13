import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
// import ProductForm from './components/ProductForm';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Castle Lite',
      volume: 660,
      inStock: false,
      quantity: 20
    },
    {
      id: 2,
      name: 'Castle Larger',
      volume: 750,
      inStock: false,
      quantity: 0
    },
    {
      id: 3,
      name: 'Black Label',
      volume: 750,
      inStock: false,
      quantity: 0
    },
    {
      id: 4,
      name: 'Hansa Pilsener',
      volume: 750,
      inStock: false,
      quantity: 0
    }
  ]);

  const changeQty = (index, qty) => {
    // const selectedItem = items.filter(item => item.id === id);
    /* console.log('items', items);
    console.log('index', index);
    console.log('qty', qty);
    const selectedItem = items[index];
    console.log('selectedItem', selectedItem);
    selectedItem.quantity = qty;
    console.log('quantity', selectedItem.quantity); */
    const newItems = [...items];
    newItems[index].quantity = 4;
    setItems(newItems);
  };
  return (
    <div className='App'>
      <h1>I am starting point</h1>
      <ProductList value={items} changeQty={changeQty} />
      {/*<ProductForm changeQty={changeQty} /> */}
    </div>
  );
}

export default App;
