import axios from 'axios';

const apiUrl = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
