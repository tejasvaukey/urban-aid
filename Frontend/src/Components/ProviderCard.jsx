import { useState } from "react";
import { FaBookmark } from "react-icons/fa"; // Importing bookmark icon
import img1 from "../assets/images/cleaning.jpg";
import PropTypes from "prop-types";

export default function ProviderCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAddedToFav, setisAddedToFav] = useState(false);
  const { businessName, rating, distance, pfp, serviceCategories } = props;

  return (
    <div
      className={`mx-4 mb-8 border border-gray-300 bg-gradient-to-br from-white to-blue-200 shadow-lg rounded-lg transition-all duration-300 h-44 hover:-translate-y-2`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Section */}
      <div className="h-3/4 flex">
        {/* Image Section */}
        <div className="h-full w-1/3 p-3">
          <img
            className="h-full w-full rounded-lg object-cover"
            src={pfp}
            alt="Service"
          />
        </div>

        {/* Info Section */}
        <div className="h-full w-2/3 p-3 flex flex-col justify-between">
          <h3
            className={`text-lg font-semibold ${
              isHovered ? "whitespace-normal" : "truncate"
            }`}
          >
            {businessName}
          </h3>
          <h4 className="text-gray-600 text-sm">
            {serviceCategories.join(", ")}
          </h4>
          <p className="text-gray-500 text-sm">{distance}</p>
          <div className="flex justify-between items-center">
            <p className="text-yellow-500 font-medium">⭐ {rating}</p>
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
      <div className="h-1/4 flex justify-between items-center px-3 py-2">
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

// ProviderCard.propTypes = {
//   name: PropTypes.string.isRequired,
//   businessName: PropTypes.string.isRequired,
//   serviceCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
//   distance: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
//   pfp: PropTypes.string.isRequired,
// };
