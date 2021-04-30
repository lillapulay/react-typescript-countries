import React, {useEffect, useState} from "react";
import './App.css';
import MainTable from "./components/MainTable/MainTable";
import SearchBar from "./components/SearchBar/SearchBar";
import useCountries from "./hooks/useCountries";

function App() {
  const [keyword, setKeyword] = useState("");
  const [error, countries] = useCountries(keyword);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }
  
  return (
    <>
      <SearchBar keyword={keyword} handleChange={handleChange} />
      <MainTable countries={countries} />
    </>
  );
}

export default App;
