import { useState } from "react";
import { FaBookmark } from "react-icons/fa"; // Importing bookmark icon
import img1 from "../assets/images/cleaning.jpg";

export default function ProviderCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [isAddedToFav, setisAddedToFav] = useState(false);

  return (
    <div
      className={`w-96 border border-gray-300 bg-gradient-to-br from-white to-blue-200 shadow-lg rounded-lg transition-all duration-300 ${
        isHovered ? "h-52" : "h-44"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Section */}
      <div className="h-3/4 flex">
        {/* Image Section */}
        <div className="h-full w-1/3 p-2">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={img1}
            alt="Service"
          />
        </div>

        {/* Info Section */}
        <div className="h-full w-2/3 p-2 flex flex-col justify-between">
          {/* Name */}
          <h3
            className={`text-lg font-semibold ${
              isHovered ? "whitespace-normal" : "truncate"
            }`}
          >
            Name name name name name name
          </h3>
          {/* Service Category */}
          <h4 className="text-gray-600 text-sm">Service Category</h4>
          {/* Distance */}
          <p className="text-gray-500 text-sm">5 km away</p>
          {/* Rating and Favorite Button */}
          <div className="flex justify-between items-center">
            <p className="text-yellow-500 font-medium">⭐ 4.5</p>
            <button
              className={`flex items-center space-x-2  hover:text-blue-800 transition ${
                isAddedToFav ? "text-blue-400" : "text-blue-800"
              }`}
            >
              <FaBookmark />
              <span
                className="text-sm pr-3"
                onClick={() => setisAddedToFav(!isAddedToFav)}
              >
                {isAddedToFav ? "Added to fav" : "Add to fav"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="h-1/4 flex justify-between items-center px-4 py-2">
        <button className="px-4 py-2 bg-blue-800 text-white text-sm rounded-lg hover:bg-blue-700 transition">
          Know More
        </button>
        <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition">
          Book a call
        </button>
      </div>
    </div>
  );
}
