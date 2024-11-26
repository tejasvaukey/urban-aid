import { useState, useEffect } from "react";
import { saveFavorites, getFavorites } from "../../utils/favoritesUtils"; // Import favorite functions
import ProviderCard from "../ProviderCard"; // Import ProviderCard component

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  // Fetch favorites from localStorage when the component mounts
  useEffect(() => {
    const savedFavorites = getFavorites();
    setFavorites(savedFavorites);
  }, []);

  // Toggle the favorite status of a provider
  const handleToggleFavorite = (id) => {
    const updatedFavorites = favorites.map((provider) => {
      if (provider.id === id) {
        // Toggle the isAddedToFav flag
        provider.isAddedToFav = !provider.isAddedToFav;
      }
      return provider;
    });

    // Save updated favorites to localStorage
    setFavorites(updatedFavorites);
    saveFavorites(updatedFavorites);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-gray-800">Your Favorites</h1>
        <p className="text-gray-500">All your saved services and items in one place.</p>
      </div>
      <div className="p-6 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {favorites.length > 0 ? (
          favorites.map((item) => (
            <ProviderCard
              key={item.id}
              {...item}
              isAddedToFav={item.isAddedToFav} // Pass isAddedToFav state from favorites
              onToggleFavorite={handleToggleFavorite} // Pass the toggle handler
            />
          ))
        ) : (
          <div className="text-gray-500 text-center col-span-3">
            <p>No favorites found! Start saving your favorites now.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
