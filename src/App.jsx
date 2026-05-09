import { useState } from "react";
import Container from "react-bootstrap/Container";

import SearchBar from "./components/SearchBar";
import CountriesList from "./components/CountriesList";
import FavoritesList from "./components/FavoritesList";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <FavoritesProvider>
      <Container className="my-4">
        <h1 className="mb-4">Country Explorer</h1>

        <SearchBar setCountries={setCountries} />

        <CountriesList countries={countries} />

        <FavoritesList />
      </Container>
    </FavoritesProvider>
  );
}

export default App;