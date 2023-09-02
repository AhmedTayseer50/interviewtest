import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../actions';

const LeftSearchBar1 = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Dispatch the action to fetch data with the search term
    dispatch(fetchData(searchTerm));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by ID or Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default LeftSearchBar1;



