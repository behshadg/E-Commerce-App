import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import Header from './components/Header';
import EcommerceApp from './components/EcommerceApp';
import ProductDetail from './components/ProductDetail';
import Landing from './components/Landing';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/home" element={<EcommerceApp />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;
