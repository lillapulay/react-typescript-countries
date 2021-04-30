import React, {useEffect, useState} from "react";
import {Country} from "../types";

export default function useCountries(keyword: string): [Error | null, Country[]] {
  
  const [ countries, setCountries ] = useState<Country[]>([]);
  const [ error, setError ] = useState(null);
  const [ filteredCountries, setFilteredCountries ] = useState<Country[]>([]);

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
      let filteredData = countries.filter((country) => { // Make Country optional if throws error
        return (country.name
        .toLowerCase()
        .search(keyword
          .toLowerCase()) !== -1 || 
          country.nativeName?.toLowerCase()
          .search(keyword
            .toLowerCase()) !== -1);
      });
      setFilteredCountries(filteredData);
  }, [countries, keyword]);

  return [error, filteredCountries];
}
