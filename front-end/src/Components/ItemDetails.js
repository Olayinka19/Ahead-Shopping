import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// import Checkout from "./Checkout";
import Checkout from "./Checkout";
// import Cart from "./Cart";
import './ItemDetails';

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
    <div >
    <br/>
    <br/>
    <Link to={`/items`}>
            <button class="uk-button uk-button-default">Back</button>
            </Link>
      <div className="item-show-cont">
       <div></div>
        <img className="imag" src={item.image_url} alt={item.name} />

        
        <div className="item-inner-cont">
        <h2>
           {item.name}
        </h2>
        <h2>{item.quantity} Pcs</h2>
        <h2>${item.price}</h2>
        <p> {item.description}</p>
        <h5>{item.category}</h5>
        
        </div>
        
        
<div>

<div>
<Link to={`/items`}>
            <button class="uk-button uk-button-default">Back</button>
            </Link>
</div>
 
  
</div>
      </div>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

      

    </div>
  );
}

export default ItemDetails;
