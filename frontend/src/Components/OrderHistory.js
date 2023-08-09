import React, { useState } from 'react';

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([
    {
      id: 1,
      date: '2023-08-08',
      items: [
        { name: 'Product 1', price: 10 },
        { name: 'Product 2', price: 20 },
      ],
      total: 30,
    },
    // Add more orders here
  ]);

  return (
    <div className="order-history">
      <h2>Order History</h2>
      {orderHistory.map((order) => (
        <div key={order.id} className="order">
          <p>Date: {order.date}</p>
          <ul>
            {order.items.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p>Total: ${order.total}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
