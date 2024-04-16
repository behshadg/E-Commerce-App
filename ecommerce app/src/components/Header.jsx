import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  background-color: #007bff;
  color: #fff;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
`;

const NavigationLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #e6e6e6;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <AppTitle>E-commerce App</AppTitle>
        <nav>
          <NavigationLink to="/home">Enter the App</NavigationLink>
        </nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
