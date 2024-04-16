import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LandingTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const LandingDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const LandingButton = styled(Link)`
  background-color: #007bff;
  color: #fff;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Landing = () => {
  return (
    <LandingWrapper>
      <LandingTitle>Welcome to the E-commerce App</LandingTitle>
      <LandingDescription>
        Discover a wide range of products and start shopping now.
      </LandingDescription>
      <LandingButton to="/home">Enter the App</LandingButton>
    </LandingWrapper>
  );
};

export default Landing;
