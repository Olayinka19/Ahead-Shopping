import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartIcon.css";

function CartIcon({ cartItemCount }) {
  return (
    <div className="CartIcon">
      <FaShoppingCart />
      {cartItemCount > 0 && <span className="ItemCount">{cartItemCount}</span>}
    </div>
  );
}

export default CartIcon;
