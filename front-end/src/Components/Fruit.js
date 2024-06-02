import React from 'react';
import Button from '@mui/material/Button';

function Fruit({ fruit, id }) {
    if (!fruit) {
        return <div>No Fruit data available</div>;
        
    }

    return (
        <div>
            <h2><a href={`/fruits/${id}`}>{fruit.name}</a></h2>
            
            <img src={fruit.image} alt={fruit.name} width="200px" height="200px" />
            <h2>Description:</h2>
            <p>{fruit.description}</p>
            <h2>Recipes:</h2>
            <p>{fruit.recipes}</p>
            <h2>Health_Benefits:</h2>
            <p>{fruit.health_benefit}</p>
            <h2>Nutrition</h2>
            <p>{fruit.nutrition_info}</p>
          
        </div>
    );
}

export default Fruit;
