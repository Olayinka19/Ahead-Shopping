// import axios from "axios";
// import { useState, useEffect } from "react";
// /* The line `import Item from "./Item.js"` is importing the `Item` component from the `Item.js` file.
// This allows the `Item` component to be used within the `Items` component. */
// import Item from "./Item.js"
// import Cart from "./Cart.js";

// // import Item from "./Item.js";

// const API = process.env.REACT_APP_API_URL;

// function Items() {
//   const [items, setItems] = useState([])
//   useEffect(() => {
//     axios
//       .get(`${API}/items`)
//       .then((response) => setItems(response.data.payload))
//       .catch((c) => console.warn("catch", c));
//   }, []);
//   return (
//     <div className="Items">
//           <section>
//             {items.map((item) => {
//               return <Item key={item.id} item={item} />;
//             })}
//           </section>

//     </div>
//   );
// }

// export default Items;


// Testing 


import React, { useState, useEffect } from "react";
import axios from "axios";
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
      setCartItems([...cartItems, item]);
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
      <section>
        {items.map((item) => (
          <Item key={item.id} item={item} addToCart={addToCart}  reviews={reviews}
            setReviews={setReviews} />
        ))}
      </section>
      <br />
      {/* <div className="CartItm">

      <Cart cartItems={cartItems} />
      </div> */}
      {/* <br />

      {/* <Checkout cartItems={cartItems} /> */}
      {/* <br />
      {!orderSubmitted ? (
        <Checkout cartItems={cartItems} onSubmit={handleSubmit} />
      ) : (
        <OrderConfirmation cartItems={cartItems} formData={formData} />
      )} */} 
      <div style={{ display: "flex", justifyContent: "center" }}>

      <Cart cartItems={cartItems} />
      </div>
      <div >
      {!orderSubmitted ? (
        <div >
          <CheckoutForm onSubmit={handleSubmit} />
          <Cart cartItems={cartItems} /> {/* Display cart items */}
        </div>
      ) : (
        <OrderConfirmation cartItems={cartItems} formData={formData} />
      )}
      {/* Other components */}
      <div style={{ display: "flex", justifyContent: "center" }}>
      <CustomerFeedback onSubmitFeedback={handleFeedbackSubmit} />
      </div>
      {/* <CustomerFeedback  /> */}
      {/* <div className="FeedbackSection">
          <h4>Customer Feedback</h4>
          {comments.map((comment, index) => (
            <div key={index} className="FeedbackPost">
              <p>{comment}</p>
            </div>
          ))}
        </div> */}
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