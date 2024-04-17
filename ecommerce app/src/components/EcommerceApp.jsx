import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

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
    setCart((prevCart) => [...prevCart, product]); // Use functional update to ensure correct state
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  };

  const checkout = () => {
    console.log('Checkout:', cart);
    setCart([]); // Clear cart
    setTotalPrice(0); // Reset total price
    navigate('/checkout');
  };

  const handleCancel = () => {
    console.log('Checkout canceled');
    navigate('/'); // Navigate to the home page
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
      <Checkout
        cart={cart}
        totalPrice={totalPrice}
        onCheckout={checkout}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default EcommerceApp;
