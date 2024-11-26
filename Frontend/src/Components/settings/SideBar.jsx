import React from "react";

const Sidebar = () => {
  return (
    <div className="h-full bg-gray-100 w-full">
      {/* Sidebar */}
      <aside className=" bg-gray-900 text-white p-4">
        <nav className="space-y-4">
          <a
            href="#profile"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Profile
          </a>
          <a
            href="#booking-history"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Booking History
          </a>
          <a
            href="#pending-bookings"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Pending Bookings
          </a>
          <a
            href="#explore-providers"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Explore Providers
          </a>
          <a
            href="#notifications"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Notifications
          </a>
          <a
            href="#favorites"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Favorites
          </a>
          <a
            href="#help-support"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Help & Support
          </a>
          <a
            href="#feedback"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Feedback
          </a>
          <a
            href="#promotions"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Promotions
          </a>
          <a
            href="#settings"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Settings
          </a>
          <a
            href="#wallet"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Wallet/Payment History
          </a>
          <a
            href="#referrals"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Referrals
          </a>
          <a href="#blog" className="block py-2 px-4 rounded hover:bg-gray-700">
            Blog/Articles
          </a>
          <a
            href="#community"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            Community
          </a>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
