// import React from "react";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartIcon.css";

function CartIcon({ cartItemCount }) {
  const [cartItems, setCartItems] = useState([]);
  // const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="CartIcon">
      <FaShoppingCart />
      {cartItemCount > 0 && <span className="ItemCount">{cartItemCount}</span>}
    </div>
  );
}

export default CartIcon;


// import React, { useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import "./Cart.css";

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);

//   // Other cart-related functions

//   const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <div className="cart">
//       {/* <span className="cart-icon">Cart</span> */}
//       <FaShoppingCart />
      
//       <span className="cart-count">{cartItemCount}</span>
//     </div>
//   );
// }

// export default Cart;

