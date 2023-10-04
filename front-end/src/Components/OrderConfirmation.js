import React from "react";
import "./OrderConfirmation.css"; // Import your CSS for styling

function OrderConfirmation({ cartItems, formData }) {
  return (
    <div className="OrderConfirmation">
      <h2>Order Confirmation</h2>
      <p>Thank you for your order, {formData.name}!</p>
      <p>Your items:</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Shipping address:</p>
      <p>{formData.address}</p>
    </div>
  );
}

export default OrderConfirmation;
