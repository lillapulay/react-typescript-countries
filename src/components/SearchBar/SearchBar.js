import React from "react";
import './searchbar.css';

function SearchBar() {
  return (
    <div className="searchArea">
      <h1>Country List</h1>
    <input type="text" name="search" placeholder="Search..." />
    <button>Search</button>
    </div>
  );
}

export default SearchBar;
