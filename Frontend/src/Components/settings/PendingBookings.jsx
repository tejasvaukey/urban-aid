import React, { useState } from "react";

const PendingBookings = () => {
  const [pendingBookings, setPendingBookings] = useState([
    {
      id: 1,
      service: "Plumbing Service",
      date: "2024-11-25",
      time: "10:00 AM",
      provider: "John's Plumbing",
      amount: 50,
      status: "Payment Pending",
      location: "123 Main St, Springfield",
    },
    {
      id: 2,
      service: "Electrical Repair",
      date: "2024-11-26",
      time: "2:00 PM",
      provider: "Electrician Pro",
      amount: 75,
      status: "Awaiting Confirmation",
      location: "45 Elm St, Metropolis",
    },
    {
      id: 3,
      service: "Carpet Cleaning",
      date: "2024-11-28",
      time: "9:30 AM",
      provider: "CleanPro Services",
      amount: 120,
      status: "Payment Pending",
      location: "78 Oak St, Riverdale",
    },
    {
      id: 4,
      service: "AC Maintenance",
      date: "2024-12-01",
      time: "11:00 AM",
      provider: "Cooling Experts",
      amount: 150,
      status: "Awaiting Confirmation",
      location: "89 Maple Ave, Gotham",
    },
    {
      id: 5,
      service: "House Painting",
      date: "2024-12-05",
      time: "8:00 AM",
      provider: "PaintCo",
      amount: 200,
      status: "Payment Pending",
      location: "123 Elm St, Smallville",
    },
    {
      id: 6,
      service: "Pest Control",
      date: "2024-12-10",
      time: "3:00 PM",
      provider: "BugAway Services",
      amount: 90,
      status: "Awaiting Confirmation",
      location: "99 Pine St, Central City",
    },
  ]);

  const [filters, setFilters] = useState({
    search: "",
    sort: "",
  });

  const statusColors = {
    "Payment Pending": "text-yellow-600 bg-yellow-100",
    "Awaiting Confirmation": "text-blue-600 bg-blue-100",
  };

  const handleCancel = (id) => {
    alert(`Booking with ID: ${id} has been canceled.`);
  };

  const handleReschedule = (id) => {
    alert(`Booking with ID: ${id} is being rescheduled.`);
  };

  const handleFilter = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Page Header */}
      <h1 className="text-2xl font-bold text-gray-700 mb-4">
        Pending Bookings
      </h1>

      {/* Filters */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          name="search"
          placeholder="Search by service or provider"
          value={filters.search}
          onChange={handleFilter}
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          name="sort"
          value={filters.sort}
          onChange={handleFilter}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort by</option>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
          <option value="provider">Provider</option>
        </select>
      </div>

      {/* Pending Bookings List */}
      <div className="space-y-4">
        {pendingBookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
          >
            {/* Booking Details */}
            <div>
              <h2 className="text-lg font-bold">{booking.service}</h2>
              <p className="text-gray-600">
                Provider:{" "}
                <span className="font-medium">{booking.provider}</span>
              </p>
              <p className="text-gray-600">
                Date: {booking.date} | Time: {booking.time}
              </p>
              <p className="text-gray-600">Location: {booking.location}</p>
              <p className="text-gray-600">
                Amount: <span className="font-medium">${booking.amount}</span>
              </p>
            </div>

            {/* Actions & Status */}
            <div className="text-right">
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  statusColors[booking.status]
                }`}
              >
                {booking.status}
              </span>
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => handleCancel(booking.id)}
                  className="text-red-500 hover:underline"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleReschedule(booking.id)}
                  className="text-blue-500 hover:underline"
                >
                  Reschedule
                </button>
                <button className="text-gray-500 hover:underline">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="bg-gray-100 rounded-lg p-4 mt-8">
        <h2 className="text-lg font-bold mb-2">Summary</h2>
        <p>Total Pending Bookings: {pendingBookings.length}</p>
        <p>
          Payment Pending:{" "}
          {
            pendingBookings.filter(
              (booking) => booking.status === "Payment Pending"
            ).length
          }
        </p>
        <p>
          Awaiting Confirmation:{" "}
          {
            pendingBookings.filter(
              (booking) => booking.status === "Awaiting Confirmation"
            ).length
          }
        </p>
      </div>
    </div>
  );
};

export default PendingBookings;
