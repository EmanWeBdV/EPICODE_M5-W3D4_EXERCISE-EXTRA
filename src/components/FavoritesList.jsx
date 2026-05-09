import { useContext } from "react";
import Button from "react-bootstrap/Button";

import { FavoritesContext } from "../context/FavoritesContext";

function FavoritesList() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="mt-4">
      <h2>Preferiti</h2>

      {favorites.length === 0 && <p>Nessun paese preferito.</p>}

      {favorites.map((country) => (
        <div
          key={country.name.common}
          className="border p-2 mb-2 d-flex justify-content-between align-items-center"
        >
          <span>{country.name.common}</span>

          <Button
            variant="danger"
            size="sm"
            onClick={() => removeFavorite(country)}
          >
            Rimuovi
          </Button>
        </div>
      ))}
    </div>
  );
}

export default FavoritesList;