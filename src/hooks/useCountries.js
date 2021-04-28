import React, {useEffect, useState} from "react";

export default function useCountries(keyword) {
  
  const [ countries, setCountries ] = useState([]);
  const [ error, setError ] = useState(null);
  const [ filteredCountries, setFilteredCountries ] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("https://restcountries.eu/rest/v2/all")
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
    } catch(error) {
        setError(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(()=> {
      let filteredData = countries.filter((country) => {
        return (country.name
        .toLowerCase()
        .search(keyword
          .toLowerCase()) !== -1 || 
          country.nativeName
          .toLowerCase()
          .search(keyword
            .toLowerCase()) !== -1);
      });
      setFilteredCountries(filteredData);
  }, [countries, keyword]);

  return [error, filteredCountries];
}
