import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import Header from '../components/Header';
import { getProducts } from '../utils/api';

const EcommerceApp = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    setTotalPrice(total);
  }, [cart]);

  const handleFilterChange = (searchTerm) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const checkout = () => {
    // Implement checkout functionality here
    console.log('Checkout:', cart);
    setCart([]);
    setTotalPrice(0);
  };

  return (
    <div>
      <Header />
      <Filters onFilterChange={handleFilterChange} />
      <ProductList products={filteredProducts} onAddToCart={addToCart} />
      <Cart
        cart={cart}
        onRemoveFromCart={removeFromCart}
        totalPrice={totalPrice}
      />
      <Checkout onCheckout={checkout} />
    </div>
  );
};

export default EcommerceApp;
