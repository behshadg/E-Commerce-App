import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const AddToCartButton = styled.button`
  width: 100%;
`;

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <CardWrapper>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>${product.price}</ProductPrice>
      <AddToCartButton onClick={() => onAddToCart(product)}>
        Add to Cart
      </AddToCartButton>
    </CardWrapper>
  );
};

export default ProductCard;
