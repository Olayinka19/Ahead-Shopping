// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Items from './Item';



// const API = process.env.REACT_APP_API_URL;

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [items, setItems] = useState([])

//   const addToCart = (item) => {
//     // Check if the item is already in the cart
//     const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

//     if (!itemInCart) {
//       setCartItems([...cartItems, item]);
//     }
//   };

//   const removeFromCart = (index) => {
//     const newCartItems = [...cartItems];
//     newCartItems.splice(index, 1);
//     setCartItems(newCartItems);
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price, 0);
//   };

//   useEffect(() => {
//     axios
//       .get(`${API}/items`)
//       .then((response) => setItems(response.data.payload))
//       .catch((error) => console.warn("catch", error));
//   }, []);

//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       <ul>
//         {cartItems.map((item, index) => (
//           <li key={index}>
//             {item.name} - ${item.price}
//             <button onClick={() => removeFromCart(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <p>Total: ${calculateTotal()}</p>

//       <h3>Available Products</h3>
//       <ul>
//         <li>
//          {items.name} Product 1 - $10 <button onClick={() => addToCart({ name: 'Product 1', price: 10 })}>Add to Cart</button>
//         </li>
//         <li>
//           Product 2 - $20 <button onClick={() => addToCart({ name: 'Product 2', price: 20 })}>Add to Cart</button>
//         </li>
//         {/* Add more products here */}
//       </ul>
//     </div>
//   );
// };

// export default Cart;


// Testing 


import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <p>Total: ${calculateTotal()}</p>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
