import React  from 'react'
import { useState } from 'react';


function PaymentSlip() {
  const [paymentSuccessful, setPaymentSuccessful] = useState(true);
  return (
    <div className='payment-slip'>
     {paymentSuccessful ? (
        <div className="payment-success">
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
          <div className="payment-details">
            <p>Payment Details:</p>
            <ul>
              <li>Card Number: **** **** **** 1234</li>
              <li>Expiry Date: 12/25</li>
              <li>Name: John Doe</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="payment-failure">
          <h2>Payment Failed</h2>
          <p>Sorry, there was an issue processing your payment.</p>
        </div>
      )}
    
    
    
    </div>
  )
}

export default PaymentSlip