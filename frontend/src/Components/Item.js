import React from 'react';
import { Link } from "react-router-dom";
import Cart from "./Cart.js";


function Item({item}) {
  return (
    
    <div className=''>
      {/* <Link to={`/items/${item.id}`}>
        <img src={item.image_url} alt={item.name} height={350} width={300} />
      </Link>
      <div>
      <h3>Product: {item.name}</h3>
      <hr class="uk-divider-icon"></hr>
      <h3>Price :${item.price}</h3>
      <hr class="uk-divider-icon"></hr>
        <h4>Description: {item.description}</h4>
        <hr class="uk-divider-icon"></hr>
        <h3>Quantity: {item.quantity}</h3>
        <button class="uk-button uk-button-default">Add to cart</button>
        
      </div> */}


      <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
    <div>
        <div class="uk-card uk-card-hover uk-card-body">
            <h3 class="uk-card-title"><Link to={`/items/${item.id}`}>
        <img src={item.image_url} alt={item.name} height={350} width={300} />
      </Link></h3>
      <h3>Product: {item.name}</h3>
      <hr class="uk-divider-icon"></hr>
      <h3>Price :${item.price}</h3>

      <hr class="uk-divider-icon"></hr>
      <button class="uk-button uk-button-default">Add to cart 🛒</button>
      <hr class="uk-divider-icon"></hr>
        </div>
    </div>
    
   
    <div>
        <div class="uk-card uk-card-secondary uk-card-hover uk-card-body uk-light">
        <h3 class="uk-card-title"><Link to={`/items/${item.id}`}>
        <img className='imag' src={item.image_url} alt={item.name} height={350} width={300} />
      </Link></h3>
      <h4>Product: {item.name}</h4>
      <hr class="uk-divider-icon"></hr>
      <h3>Price :${item.price}</h3>
      <hr class="uk-divider-icon"></hr>
      <h4>Description: {item.description}</h4>
      <hr class="uk-divider-icon"></hr>
      <h3>In-Stock: {item.quantity}</h3>
      <hr class="uk-divider-icon"></hr>
      <Link to = "/Cart"><button class="uk-button uk-button-default">Add to cart 🛒</button></Link>
      <br />
      {/* <button class="uk-button uk-button-default">Add to cart 🛒</button> */}
      <hr class="uk-divider-icon"></hr>
        </div>
    </div>
</div>
     
    </div>
  )
}

export default Item;