import React from "react";
import './searchbar.css';

function SearchBar({keyword, handleChange}) {
  return (
    <div className="searchArea">
      <h1>Country List</h1>
      <input 
      type="text" 
      name="search" 
      placeholder="Search for a country by its (native) name..." 
      value={keyword}
      onChange={handleChange} 
      />
      <button>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
