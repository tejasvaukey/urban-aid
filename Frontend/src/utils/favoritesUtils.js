// favoritesUtils.js

const FAVORITES_KEY = "userFavorites";

// Function to get favorites from localStorage
export const getFavorites = () => {
  const storedFavorites = localStorage.getItem(FAVORITES_KEY);
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

// Function to save favorites to localStorage
export const saveFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};
