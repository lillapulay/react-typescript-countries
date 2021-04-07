import React, {useEffect, useState} from "react";

function useCountries() {
  const [ countries, setCountries ] = useState([]);
  const [ error, setError ] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch("https://restcountries.eu/rest/v2/all")
      const data = await response.json();
      setCountries(data);
    } catch(error) {
        setError(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return [error, countries];
}

export default useCountries;
