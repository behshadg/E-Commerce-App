import React from 'react';
import styled from 'styled-components';

const CheckoutWrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 2rem;
`;

const CheckoutButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const Checkout = ({ onCheckout }) => {
  return (
    <CheckoutWrapper>
      <h2>Checkout</h2>
      <CheckoutButton onClick={onCheckout}>Proceed to Checkout</CheckoutButton>
    </CheckoutWrapper>
  );
};

export default Checkout;
