import React, { useState } from "react";
import "./Checkout.css"; // Import your checkout-specific CSS
import OrderConfirmation from "./OrderConfirmation.js"; // Import the OrderConfirmation component

function Checkout({ cartItems, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false); 
  const [checkoutVisible, setCheckoutVisible] = useState(true);
  // Add this state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setOrderPlaced(true); // Set the orderPlaced state to true
  };

  if (orderPlaced) {
    // If the order is placed, show the OrderConfirmation component
    return <OrderConfirmation cartItems={cartItems} formData={formData} />;
  }

  return (
    <div className="Checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields */}
        <button type="submit" className="CheckoutButton">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
