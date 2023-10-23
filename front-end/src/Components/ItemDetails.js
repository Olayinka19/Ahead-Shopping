import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// import Checkout from "./Checkout";
import Checkout from "./Checkout";
// import Cart from "./Cart";

function ItemDetails() {
  const [item, setItem] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/items/${id}`).then((response) => {
      setItem(response.data.payload);
    });
  }, [id, navigate, API]);
  const deleteitem = () => {
    axios
      .delete(`${API}/items/${id}`)
      .then(() => {
        navigate(`/items`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deleteitem();
  };
  return (
    <div className="ItemShow">
    <br/>
    <br/>
   
      <div className="stock-container">
       
        <img className="imag" src={item.image_url} alt={item.name} />
        
    
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">
        

    
</div>
<div>



  
</div>
<div></div>
        

       
        <ul uk-accordion="collapsible: false">
    <li>
        <a class="uk-accordion-title" href>Product session</a>
        <div class="uk-accordion-content">
        <h2>
           {item.name}
        </h2>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>In Stock</a>
        <div class="uk-accordion-content">
        <h2>{item.quantity} Pcs</h2>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>Price</a>
        <div class="uk-accordion-content">
        <h2>${item.price}</h2>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>Description</a>
        <div class="uk-accordion-content">
        <p> {item.description}</p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>Category: </a>
        <div class="uk-accordion-content">
        <h5>{item.category}</h5>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>Buy Now</a>
        <div class="uk-accordion-content">
        <Link to ="/PaymentSlip"><button class="uk-button uk-button-default">Make Payment</button></Link>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href>Add To Cart</a>
        <div class="uk-accordion-content">
        <Link >
              <button class="uk-button uk-button-default">Add to  Cart</button>
            </Link>
        </div>
    </li>
</ul>
        
        
        
        <div className="showNavigation">
       <br />
       

          <div>
            {" "}
            <Link to={`/items`}>
            <button class="uk-button uk-button-default">Back</button>
            </Link>
          </div>
          <br/>
          <div>
          
          </div>
          <div>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
