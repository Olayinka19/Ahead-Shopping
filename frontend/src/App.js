import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import './App.css';

function App() {
  return (
    
  <>
  <NavBar/>
  <Router>
  <Routes>
    <Route path="/" element={<Home/>} />
  </Routes>

  </Router>

  </>
  );
}

export default App;
