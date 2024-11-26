import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaHistory, FaCalendarAlt } from "react-icons/fa";

export default function QuickAccess() {
  const links = [
    { id: 1, title: "Favorites", icon: <FaStar />, path: "/favorites" },
    { id: 2, title: "Recent Searches", icon: <FaHistory />, path: "/recent-searches" },
    { id: 3, title: "Pending Bookings", icon: <FaCalendarAlt />, path: "/bookings" },
  ];

  return (
    <section className="bg-gray-100 rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4 text-blue-900">Quick Access</h2>
      <div className="grid grid-cols-3 gap-4">
        {links.map((link) => (
          <Link
            to={link.path}
            key={link.id}
            className="flex flex-col items-center p-4 bg-white rounded-md shadow-md hover:bg-blue-50 transition duration-300"
          >
            <div className="text-3xl text-blue-900 mb-2">{link.icon}</div>
            <span className="text-sm font-medium text-gray-700">{link.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
