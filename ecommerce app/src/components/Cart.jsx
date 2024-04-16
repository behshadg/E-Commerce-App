import React from 'react';
import styled from 'styled-components';

const CartWrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CartItemInfo = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const CartItemPrice = styled.div`
  font-weight: 500;
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  cursor: pointer;
`;

const TotalPrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: right;
`;

const Cart = ({ cart, onRemoveFromCart, totalPrice }) => {
  return (
    <CartWrapper>
      <h2>Cart</h2>
      {cart.map((product, index) => (
        <CartItem key={index}>
          <CartItemInfo>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </CartItemInfo>
          <CartItemPrice>${product.price}</CartItemPrice>
          <RemoveButton onClick={() => onRemoveFromCart(index)}>
            Remove
          </RemoveButton>
        </CartItem>
      ))}
      <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
    </CartWrapper>
  );
};

export default Cart;
