import './App.css';
import MainTable from "./components/MainTable/MainTable";
import SearchBar from "./components/SearchBar/SearchBar";
import useCountries from "./hooks/useCountries";

function App() {
  const [error, countries] = useCountries()
  return (
    <>
      <SearchBar />
      <MainTable countries={countries} />
    </>
  );
}

export default App;
