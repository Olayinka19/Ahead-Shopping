


import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar.js";
import Item from "./Item.js";
import { Link } from "react-router-dom";
import Cart from "./Cart.js";
import Checkout from "./Checkout.js";
import OrderConfirmation from "./OrderConfirmation.js";
import CheckoutForm from "./CheckoutForm.js";
import CustomerFeedback from "./CustomerFeedback.js";
// import ItemReview from "./ItemReview.js";
// import './Items.css'; // Import your CSS for styling

const API = process.env.REACT_APP_API_URL;

function Items() {
  const [items, setItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [orderSubmitted, setOrderSubmitted] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const addToCart = (item) => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (!itemInCart) {
      // setCartItems([...cartItems, item]);
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    // setCartItems()
    // setCartItems([...cartItems, item]);

  };
  const handleSubmit = (data) => {
    setFormData(data);
    setOrderSubmitted(true);
  };


  useEffect(() => {
    axios
      .get(`${API}/items`)
      .then((response) => setItems(response.data.payload))
      .catch((error) => console.warn("catch", error));
  }, []);

  const handleFeedbackSubmit = (feedback) => {
    // Process the feedback and update reviews
    // Example: console.log(feedback);
    const newReview = {
      reviewer: "Anonymous",
      rating: 0,
      comment: feedback,
      item_id: 1,
      item_name: "Sample Product",
      item_image: "sample-image.jpg",
    };

    // Assuming you have an API endpoint to handle new feedback/reviews
    axios.post("/submit-feedback", newReview)
      .then((response) => {
        setReviews([...reviews, newReview]);
      })
      .catch((error) => {
        console.error("Error submitting feedback", error);
      });
  };

  return (
    <div className="Items">
     <div className="main-items">
      <section className="products-items">
        {items.map((item) => (
          <Item key={item.id} item={item} addToCart={addToCart} price={item.price}  reviews={reviews} cartItems={cartItems}
            setReviews={setReviews} />
        ))}
      </section>
      <br /> 
      <div>

      </div>
      
  
</div>
<br />
      <div>
            {" "}
            <Link to={`/`}>
            <button class="uk-button uk-button-default">Back</button>
            </Link>
          </div>
          <br />
    </div>
  );
}

export default Items;
