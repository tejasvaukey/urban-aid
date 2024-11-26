import React, { useState } from "react";
import { FaMapMarkerAlt, FaSearch, FaThumbsUp, FaFilter } from "react-icons/fa";

const RecommendedPage = () => {
  // Mock Data for Recommendations
  const recommendations = [
    {
      id: 1,
      title: "Nearby Electricians",
      description: "Top-rated electricians within 5 km of your location.",
      category: "Electricians",
      icon: <FaMapMarkerAlt />,
    },
    {
      id: 2,
      title: "Plumbers in Demand",
      description: "Reliable plumbing services trending in your area.",
      category: "Plumbers",
      icon: <FaThumbsUp />,
    },
    {
      id: 3,
      title: "Recently Searched: Cleaning",
      description: "Services tailored to your recent search for cleaning.",
      category: "Cleaning Services",
      icon: <FaSearch />,
    },
    {
      id: 4,
      title: "Top Tailors Nearby",
      description: "Find highly rated tailoring services close to you.",
      category: "Tailors",
      icon: <FaMapMarkerAlt />,
    },
    {
      id: 5,
      title: "Painters You Can Trust",
      description: "Top-rated painters, perfect for your next project.",
      category: "Painters",
      icon: <FaThumbsUp />,
    },
  ];

  // State for Filtering by Category
  const [filter, setFilter] = useState("All");

  // Filter Recommendations
  const filteredRecommendations =
    filter === "All"
      ? recommendations
      : recommendations.filter((rec) => rec.category === filter);

  return (
    <div className="bg-gradient-to-br from-blue-950 to-black min-h-screen p-10 text-white">
      <h1 className="text-3xl font-bold mb-8 text-center">Recommended Services</h1>

      {/* Filter Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold">Personalized for You</h2>
        <div className="flex items-center">
          <FaFilter className="text-xl mr-2" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-transparent border border-gray-400 text-white py-1 px-3 rounded-md"
          >
            <option value="All">All</option>
            <option value="Electricians">Electricians</option>
            <option value="Plumbers">Plumbers</option>
            <option value="Cleaning Services">Cleaning Services</option>
            <option value="Tailors">Tailors</option>
            <option value="Painters">Painters</option>
          </select>
        </div>
      </div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecommendations.map((rec) => (
          <div
            key={rec.id}
            className="flex flex-col items-start p-4 bg-white text-black rounded-md shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="text-4xl text-blue-900 mb-4">{rec.icon}</div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">{rec.title}</h3>
            <p className="text-sm text-gray-600">{rec.description}</p>
            <button className="mt-4 bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Explore Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedPage;
