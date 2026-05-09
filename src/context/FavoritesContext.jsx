import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider(props) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (country) => {
    const alreadyExists = favorites.find(
      (fav) => fav.name.common === country.name.common
    );

    if (!alreadyExists) {
      setFavorites([...favorites, country]);
    }
  };

  const removeFavorite = (country) => {
    const newFavorites = favorites.filter(
      (fav) => fav.name.common !== country.name.common
    );

    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
}