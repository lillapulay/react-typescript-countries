import React from "react";
import './searchbar.css';

type SearchBarProps = {
  keyword: string;
  // Event handlers always return void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({keyword, handleChange}: SearchBarProps) {
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
    </div>
  );
}

export default SearchBar;
