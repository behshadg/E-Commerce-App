import React from 'react';
import styled from 'styled-components';

const CheckoutWrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 2rem;
`;

const CheckoutHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CheckoutItemsWrapper = styled.div`
  margin-bottom: 1rem;
`;

const CheckoutItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CheckoutTotalPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: right;
  margin-bottom: 1rem;
`;

const CheckoutButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const CheckoutButton = styled.button`
  background-color: ${(props) =>
    props.variant === 'primary' ? '#28a745' : '#dc3545'};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.variant === 'primary' ? '#218838' : '#c82333'};
  }
`;

const Checkout = ({ cart, totalPrice, onCheckout, onCancel }) => {
  return (
    <CheckoutWrapper>
      <CheckoutHeader>Checkout</CheckoutHeader>
      {cart && cart.length > 0 && (
        <CheckoutItemsWrapper>
          {cart.map((item, index) => (
            <CheckoutItem key={index}>
              <div>{item.title}</div>
              <div>${item.price.toFixed(2)}</div>
            </CheckoutItem>
          ))}
        </CheckoutItemsWrapper>
      )}
      <CheckoutTotalPrice>Total: ${totalPrice.toFixed(2)}</CheckoutTotalPrice>
      <CheckoutButtonsWrapper>
        <CheckoutButton variant="primary" onClick={onCheckout}>
          Place Order
        </CheckoutButton>
        <CheckoutButton variant="danger" onClick={onCancel}>
          Cancel
        </CheckoutButton>
      </CheckoutButtonsWrapper>
    </CheckoutWrapper>
  );
};

export default Checkout;
