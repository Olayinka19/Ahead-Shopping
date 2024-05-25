import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import NavBar from "./Components/NavBar";
import PaymentSlip from "./Components/PaymentSlip";
import Cart from "./Components/Cart";
import OrderHistory from "./Components/OrderHistory";
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";
import OrderConfirmation from "./Components/OrderConfirmation";
import CheckoutForm from "./Components/CheckoutForm";
import CartIcon from "./Components/CartIcon";
import ItemReview from "./Components/ItemReview";
import StarRating from "./Components/StarRating";
import CustomerFeedback from "./Components/CustomerFeedback";
import BlogPost from "./Components/BlogPost";
import AboutMe from "./Components/AboutMe";
import ContactUs from "./Components/ContactUs";
import AIPodcast from "./Components/AIPodcast";
import Projects from "./Components/Projects";
import cartProduct from "./Components/cartProduct";
import Signin from './Pages/Signin';
import SignUp from './Pages/SignUp';
import Account from './Pages/Account';
import Register from './Components/Register';
import Fruits from './Components/Fruits';


import {AuthContextProvider} from './Context/AuthContext';



import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]); 
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    // Your existing addToCart logic
    const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

  };
  const handleCartClick = () => {
    setShowCart(!showCart);
  };
  
  return (
    
  <div className="App">
  <AuthContextProvider>
  <Router>
  
  <NavBar cartItemCount={cartItems.length} onCartClick={handleCartClick} />
  {showCart && <Cart />}
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Register" element={<Register/>} />
    <Route path="/SignUp" element={<SignUp/>} />
    <Route path='/account' element={<Account/>} />
    <Route path="/Projects" element={<Projects/>} />
    <Route path="/AIPodcast" element={<AIPodcast/>} />
    <Route path="/ContactUs" element={<ContactUs/>} />
    <Route path="/AboutMe" element={<AboutMe/>} />
    <Route path="/BlogPost" element={<BlogPost/>} />
    <Route path="/OrderHistory" element={<OrderHistory/>} />
    <Route path="/Cart" element={<Cart/>} />
    <Route path='/signin' element={<Signin/>} />
    <Route path="/cartProduct" element={<cartProduct/>} />
    <Route path="/CustomerFeedback" element={<CustomerFeedback/>} />
    <Route path="/ItemReview" element={<ItemReview/>} />
    <Route path="/StartRating" element={<StarRating/>} />
    <Route path="/CartIcon" element={<CartIcon/>} />
    <Route path="/CheckoutForm" element={<CheckoutForm/>} />
    <Route path="/OrderConfirmation" element={<OrderConfirmation/>} />
    <Route path="/Checkout" element={<Checkout/>} />
    <Route path="/PaymentSlip" element={<PaymentSlip/>} />
    <Route path="/Items" element={<Index/>} />
    <Route path="/Fruits" element={<Fruits/>} />
    <Route path="/Items/:id" element={<Show/>} />
    <Route path="/Items/new" element={<New/>} />
    <Route path="/Items/:id/edit" element={<Edit/>} />
    <Route path="*" element={<FourOFour/>} />
    
  </Routes>

  </Router>
  <Footer />
  </AuthContextProvider>
  </div>
  );
}

export default App;
