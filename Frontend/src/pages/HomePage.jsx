import React from "react";

const HomePage = () => {
  return (
    <div className="w-full h-full bg-gray-100">
      {/* User Dashboard Section */}
      <section className=" bg-blue-200 p-8">
        <h2 className="text-3xl font-bold text-gray-800">Welcome, John!</h2>
        <div className="mt-6 flex space-x-6">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md">
            Quick Links
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md">
            Recent Activities
          </button>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md">
            User Reviews
          </button>
        </div>
      </section>

      {/* Find a Service Section */}
      <section className="h-screen bg-white p-8">
        <h2 className="text-2xl font-semibold text-gray-800">Find a Service</h2>
        <div className="mt-6 flex space-x-6">
          <button className="bg-blue-400 text-white py-2 px-4 rounded-lg shadow-md w-1/3">
            Plumbing
          </button>
          <button className="bg-blue-400 text-white py-2 px-4 rounded-lg shadow-md w-1/3">
            Electrical
          </button>
          <button className="bg-blue-400 text-white py-2 px-4 rounded-lg shadow-md w-1/3">
            Locksmith
          </button>
        </div>
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search for services..."
            className="w-full p-3 rounded-md border border-gray-300"
          />
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="h-screen bg-gray-50 p-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Featured Services
        </h2>
        <div className="mt-6 flex space-x-6">
          <div className="w-1/3 p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">
              Service Provider 1
            </h3>
            <p className="text-gray-500">Plumbing</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md mt-2">
              Book Now
            </button>
          </div>
          <div className="w-1/3 p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">
              Service Provider 2
            </h3>
            <p className="text-gray-500">Electrical</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md mt-2">
              Book Now
            </button>
          </div>
          <div className="w-1/3 p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">
              Service Provider 3
            </h3>
            <p className="text-gray-500">Locksmith</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md mt-2">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Active Requests Section */}
      <section className="h-screen bg-white p-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Your Active Requests
        </h2>
        <div className="mt-6">
          <div className="border-b border-gray-300 pb-4 mb-4">
            <h3 className="text-xl text-gray-700">
              Plumbing - Status: In Progress
            </h3>
          </div>
          <div className="border-b border-gray-300 pb-4 mb-4">
            <h3 className="text-xl text-gray-700">
              Electrical - Status: Pending
            </h3>
          </div>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="h-screen bg-blue-100 p-8">
        <h2 className="text-2xl font-semibold text-gray-800">Notifications</h2>
        <div className="mt-6">
          <p className="text-gray-700">
            You have a scheduled Plumbing service on 25th Nov.
          </p>
          <p className="text-gray-700 mt-2">
            Your Electrical service request is still pending approval.
          </p>
        </div>
      </section>

      {/* Offers and Discounts Section */}
      <section className="h-screen bg-yellow-100 p-8">
        <h2 className="text-2xl font-semibold text-gray-800">
          Exclusive Offers
        </h2>
        <div className="mt-6">
          <p className="text-gray-700">
            Get 20% off on your first service request!
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
