import React from 'react';

const Checkout = ({ onCheckout }) => {
  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={onCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;
