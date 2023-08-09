import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <article>
        <h3>
           {item.name}
        </h3>
        <img className="imag" src={item.image_url} alt={item.name} height={200} width={200} />
        <h2>In-stock: {item.quantity} Pcs</h2>
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="clsActivated: uk-transition-active; center: true">
        

    <ul class="uk-slider-items uk-grid">
        <li class="uk-width-3-4">
            <div class="uk-panel">
                <img className="imag" src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" width="450" height="400" alt="" />
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                    <h3 class="uk-margin-remove">${item.price}</h3>
                    <p class="uk-margin-remove">{item.category}.</p>
                </div>
            </div>
        </li>
        <li class="uk-width-3-4">
            <div class="uk-panel">
                <img className="imag" src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="450" height="400" alt="" />
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">${item.price}</h3>
                    <p class="uk-margin-remove">{item.category}.</p>
                </div>
            </div>
        </li>
        <li class="uk-width-3-4">
            <div class="uk-panel">
                <img className="imag" src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"  alt="" />
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">${item.price}</h3>
                    <p class="uk-margin-remove">{item.category}.</p>
                </div>
            </div>
        </li>
       
        <li class="uk-width-3-4">
            <div class="uk-panel">
                <img className="imag" src="https://images.pexels.com/photos/3919865/pexels-photo-3919865.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"  alt=""/>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                <h3 class="uk-margin-remove">${item.price}</h3>
                    <p class="uk-margin-remove">{item.category}.</p>
                </div>
            </div>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
        {/* <h2>Price:$ {item.price}</h2> */}
        <h5><b>Description</b>: {item.description}</h5>
        <h5>Category: {item.category}</h5>
        
        <Link to ="/PaymentSlip"><button class="uk-button uk-button-default">Make Payment</button></Link>
        <div className="showNavigation">
       <br />
          <div>
            {" "}
            <Link to={`/items`}>
            <button class="uk-button uk-button-default">Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/items/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            {/* <button onClick={handleDelete}>Delete</button> */}
            <button class="uk-button uk-button-default" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ItemDetails;
