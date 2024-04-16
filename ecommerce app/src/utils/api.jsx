import axios from 'axios';

const apiUrl = 'https://fakestoreapi.com';

export const getProducts = async (category, page, limit) => {
  try {
    const response = await axios.get(
      `${apiUrl}/products?category=${category}&limit=${limit}&offset=${
        (page - 1) * limit
      }`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${apiUrl}/products/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getProduct = async (productId) => {
  try {
    const response = await axios.get(`${apiUrl}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};
