import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fruit from './Fruit';
import Button from '@mui/material/Button';

const API = process.env.REACT_APP_API_URL;

function Fruits({ fruit, id }) {
    const [fruits, setFruits] = useState([]);
    const [order, setOrder] = useState('ASC');

    const sorting = (col) => {
        if (order === 'ASC') {
            const sorted = [...fruits].sort((a, b) => (a[col] > b[col] ? 1 : -1));
            setFruits(sorted);
            setOrder('DSC');
        } else {
            const sorted = [...fruits].sort((a, b) => (a[col] < b[col] ? 1 : -1));
            setFruits(sorted);
            setOrder('ASC');
        }
    };

    useEffect(() => {
        axios.get(`${API}/fruits`)
            .then((response) => {
                setFruits(response.data.payload);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <Button variant="primary" onClick={() => sorting('name')}>Sort by Name</Button>
            <Button variant="primary"  onClick={() => sorting('color')}>Sort by Color</Button>
            <Button variant="primary"  onClick={() => sorting('size')}>Sort by Size</Button>

            <div>Fruits</div>
           
{/* <div>
{fruits.map((fruit, id) => (
                <Fruit key={id} fruit={fruit} id={id} />
            ))}
</div> */}
<div>
  {Array.isArray(fruits) ? (
    fruits.map((fruit, id) => (
      <Fruit key={id} fruit={fruit} id={id} />
    ))
  ) : (
    <p>No fruits available</p>
  )}
</div>

          
        </div>
    );
}

export default Fruits;
