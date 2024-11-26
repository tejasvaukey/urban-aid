import React, { useState } from "react";

const ExploreProviders = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState({
    category: "",
    priceRange: "",
    rating: "",
  });

  const [providers, setProviders] = useState([
    {
      id: 1,
      name: "John's Plumbing",
      service: "Plumbing",
      rating: 4.5,
      price: "$50/hr",
      location: "123 Main St, Springfield",
      isFeatured: true,
    },
    {
      id: 2,
      name: "Electrician Pro",
      service: "Electrical Repair",
      rating: 4.8,
      price: "$75/hr",
      location: "45 Elm St, Metropolis",
      isFeatured: false,
    },
    {
      id: 3,
      name: "Green Thumb Gardening",
      service: "Gardening",
      rating: 4.2,
      price: "$40/hr",
      location: "67 Pine St, Riverdale",
      isFeatured: true,
    },
    {
        id: 5,
        name: "TechFix IT Solutions",
        service: "IT Support",
        rating: 4.6,
        price: "$80/hr",
        location: "88 Silicon Valley Rd, Metropolis",
        isFeatured: true,
      },
  ]);

  const handleSearch = (e) => setSearch(e.target.value);
  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };

  const filteredProviders = providers.filter((provider) =>
    provider.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6" id="explore-providers-page">
      {/* Header */}
      <h1 id="explore-header" className="text-2xl font-bold text-gray-700 mb-4">
        Explore Providers
      </h1>

      {/* Search and Filter Section */}
      <div
        id="search-filter-section"
        className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 mb-8"
      >
        <input
          id="search-input"
          type="text"
          placeholder="Search by name, service, or location"
          value={search}
          onChange={handleSearch}
          className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          id="category-filter"
          name="category"
          value={filter.category}
          onChange={handleFilterChange}
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Electrical">Electrical</option>
          <option value="Gardening">Gardening</option>
        </select>
      </div>

      {/* Featured Providers Section */}
      <div id="featured-providers-section" className="mb-8">
        <h2 id="featured-providers-header" className="text-xl font-semibold mb-4">
          Featured Providers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {providers
            .filter((provider) => provider.isFeatured)
            .map((provider) => (
              <div
                id={`provider-card-${provider.id}`}
                key={provider.id}
                className="bg-blue-100 p-4 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-bold">{provider.name}</h3>
                <p className="text-sm text-gray-700">{provider.service}</p>
                <p className="text-sm text-gray-700">{provider.location}</p>
                <p className="text-sm text-gray-700">
                  Rating: {provider.rating} ⭐
                </p>
                <p className="text-sm text-gray-700">Price: {provider.price}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Providers List */}
      <h2 id="providers-list-header" className="text-xl font-semibold mb-4">
        All Providers
      </h2>
      <div id="providers-list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProviders.map((provider) => (
          <div
            id={`provider-card-${provider.id}`}
            key={provider.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
          >
            <h3 id={`provider-name-${provider.id}`} className="text-lg font-bold">
              {provider.name}
            </h3>
            <p className="text-sm text-gray-700">{provider.service}</p>
            <p className="text-sm text-gray-700">{provider.location}</p>
            <p className="text-sm text-gray-700">
              Rating: {provider.rating} ⭐
            </p>
            <p className="text-sm text-gray-700">Price: {provider.price}</p>
            <div className="mt-4 flex justify-between items-center">
              <button
                id={`view-profile-button-${provider.id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
              >
                View Profile
              </button>
              <button
                id={`book-now-button-${provider.id}`}
                className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreProviders;
