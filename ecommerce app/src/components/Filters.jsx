import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onFilterChange(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    onFilterChange(searchTerm, event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={sortBy} onChange={handleSortChange}>
        <option value="">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Filters;
