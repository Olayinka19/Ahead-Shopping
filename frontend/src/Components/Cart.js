import React, { useState } from 'react';
import Items from './Items';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([])

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>

      <h3>Available Products</h3>
      <ul>
        <li>
         {items.name} Product 1 - $10 <button onClick={() => addToCart({ name: 'Product 1', price: 10 })}>Add to Cart</button>
        </li>
        <li>
          Product 2 - $20 <button onClick={() => addToCart({ name: 'Product 2', price: 20 })}>Add to Cart</button>
        </li>
        {/* Add more products here */}
      </ul>
    </div>
  );
};

export default Cart;
