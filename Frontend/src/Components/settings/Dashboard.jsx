import React from "react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-900 text-white p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Urban Aid</h1>
        <nav className="space-y-4">
          <a href="#profile" className="block py-2 px-4 rounded hover:bg-gray-700">
            Profile
          </a>
          <a href="#booking-history" className="block py-2 px-4 rounded hover:bg-gray-700">
            Booking History
          </a>
          <a href="#pending-bookings" className="block py-2 px-4 rounded hover:bg-gray-700">
            Pending Bookings
          </a>
          <a href="#explore-providers" className="block py-2 px-4 rounded hover:bg-gray-700">
            Explore Providers
          </a>
          <a href="#notifications" className="block py-2 px-4 rounded hover:bg-gray-700">
            Notifications
          </a>
          <a href="#favorites" className="block py-2 px-4 rounded hover:bg-gray-700">
            Favorites
          </a>
          <a href="#help-support" className="block py-2 px-4 rounded hover:bg-gray-700">
            Help & Support
          </a>
          <a href="#feedback" className="block py-2 px-4 rounded hover:bg-gray-700">
            Feedback
          </a>
          <a href="#promotions" className="block py-2 px-4 rounded hover:bg-gray-700">
            Promotions
          </a>
          <a href="#settings" className="block py-2 px-4 rounded hover:bg-gray-700">
            Settings
          </a>
          <a href="#wallet" className="block py-2 px-4 rounded hover:bg-gray-700">
            Wallet/Payment History
          </a>
          <a href="#referrals" className="block py-2 px-4 rounded hover:bg-gray-700">
            Referrals
          </a>
          <a href="#blog" className="block py-2 px-4 rounded hover:bg-gray-700">
            Blog/Articles
          </a>
          <a href="#community" className="block py-2 px-4 rounded hover:bg-gray-700">
            Community
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white p-6">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <div className="bg-gray-100 p-6 rounded shadow">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
              <div>
                <h2 className="text-2xl font-bold">Obama Bin Laden</h2>
                <p className="text-gray-600">Age: 54</p>
                <p className="text-gray-600">Contact: 12345XXXXX</p>
                <p className="text-gray-600">Email: obamabinladen@gmail.com</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-bold">Address:</h3>
              <div className="bg-white p-4 rounded shadow mt-2">
                <p>Shivam Complex, Korbi</p>
                <p>Bilsapur, Chhattisgarh, 495001</p>
                <p>Phone: 12345XXXXX</p>
              </div>
              <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded">
                Add Address
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;