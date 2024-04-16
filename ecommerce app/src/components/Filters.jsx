import React, { useState, useEffect } from 'react';
import { getCategories } from '../utils/api';
import styled from 'styled-components';

const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 300px;
`;

const SortSelect = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin-left: 1rem;
`;

const Filters = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onFilterChange(event.target.value, selectedCategory, sortBy);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    onFilterChange(searchTerm, event.target.value, sortBy);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    onFilterChange(searchTerm, selectedCategory, event.target.value);
  };

  return (
    <FiltersWrapper>
      <SearchInput
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <SortSelect value={sortBy} onChange={handleSortChange}>
        <option value="">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </SortSelect>
    </FiltersWrapper>
  );
};

export default Filters;
