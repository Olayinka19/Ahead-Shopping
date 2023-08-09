import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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



import './App.css';

function App() {
  return (
    
  <div className="App">
  <Router>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/OrderHistory" element={<OrderHistory/>} />
    <Route path="/Cart" element={<Cart/>} />
    <Route path="/PaymentSlip" element={<PaymentSlip/>} />
    <Route path="/Items" element={<Index/>} />
    <Route path="/Items/:id" element={<Show/>} />
    <Route path="/Items/new" element={<New/>} />
    <Route path="/Items/:id/edit" element={<Edit/>} />
    <Route path="*" element={<FourOFour/>} />
  </Routes>
<Footer />
  </Router>

  </div>
  );
}

export default App;
