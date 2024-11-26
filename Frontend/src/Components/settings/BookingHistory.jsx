import React, { useState } from "react";

const CombinedBookingHistory = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      service: "Plumbing Service",
      date: "2024-11-22",
      time: "10:00 AM",
      provider: "John's Plumbing",
      amount: 50,
      status: "Completed",
    },
    {
      id: 2,
      service: "Electrical Repair",
      date: "2024-11-24",
      time: "2:00 PM",
      provider: "Electrician Pro",
      amount: 75,
      status: "Pending",
    },
    {
      id: 3,
      service: "House Cleaning",
      date: "2024-11-21",
      time: "9:00 AM",
      provider: "CleanPro Services",
      amount: 40,
      status: "Cancelled",
    },
    {
      id: 4,
      service: "Carpentry Work",
      date: "2024-11-20",
      time: "11:30 AM",
      provider: "WoodWorks Co.",
      amount: 120,
      status: "Completed",
    },
    {
      id: 5,
      service: "AC Maintenance",
      date: "2024-11-19",
      time: "4:00 PM",
      provider: "CoolAir Experts",
      amount: 90,
      status: "In Progress",
    },
    {
      id: 6,
      service: "Lawn Mowing",
      date: "2024-11-18",
      time: "8:30 AM",
      provider: "GreenField Services",
      amount: 30,
      status: "Completed",
    },
    {
      id: 7,
      service: "Pest Control",
      date: "2024-11-17",
      time: "3:00 PM",
      provider: "BugFree Solutions",
      amount: 150,
      status: "Payment Pending", // New status
    },
    {
      id: 8,
      service: "Home Painting",
      date: "2024-11-16",
      time: "9:00 AM",
      provider: "ColorCraft Painters",
      amount: 200,
      status: "Awaiting Confirmation", // New status
    },
    {
      id: 9,
      service: "Car Wash",
      date: "2024-11-15",
      time: "2:00 PM",
      provider: "ShinyCars Wash",
      amount: 25,
      status: "Completed",
    },
    {
      id: 10,
      service: "Gardening",
      date: "2024-11-14",
      time: "7:30 AM",
      provider: "NatureCare Gardeners",
      amount: 60,
      status: "Pending",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // New state for search input

  // Sort bookings by date (most recent first)
  const sortedBookings = [...bookings].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Filter bookings by status and search term
  const filteredBookings = sortedBookings.filter((booking) => {
    const matchesStatus =
      !filterStatus || booking.status === filterStatus;
    const matchesSearch =
      booking.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.provider.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const statusColors = {
    Completed: "text-green-600 bg-green-100",
    Pending: "text-yellow-600 bg-yellow-100",
    Cancelled: "text-red-600 bg-red-100",
    "In Progress": "text-blue-600 bg-blue-100",
    "Payment Pending": "text-orange-600 bg-orange-100", // New color for Payment Pending
    "Awaiting Confirmation": "text-purple-600 bg-purple-100", // New color for Awaiting Confirmation
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Booking History</h1>

      {/* Filters */}
      <div className="flex justify-between items-center mb-6">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Bookings</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
          <option value="In Progress">In Progress</option>
          <option value="Payment Pending">Payment Pending</option> {/* New option */}
          <option value="Awaiting Confirmation">Awaiting Confirmation</option> {/* New option */}
        </select>

        {/* Search by service or provider */}
        <input
          type="text"
          placeholder="Search by service or provider"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Booking List */}
      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
          >
            {/* Booking Info */}
            <div>
              <h2 className="text-lg font-bold">{booking.service}</h2>
              <p className="text-gray-600">
                Provider: <span className="font-medium">{booking.provider}</span>
              </p>
              <p className="text-gray-600">
                Date: {booking.date} | Time: {booking.time}
              </p>
              <p className="text-gray-600">
                Amount: <span className="font-medium">${booking.amount}</span>
              </p>
            </div>

            {/* Status and Actions */}
            <div className="text-right">
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusColors[booking.status]}`}
              >
                {booking.status}
              </span>
              <div className="mt-2 space-x-2">
                {booking.status === "Completed" && (
                  <button className="text-blue-500 hover:underline">
                    Leave Review
                  </button>
                )}
                {booking.status === "Pending" && (
                  <>
                    <button className="text-red-500 hover:underline">
                      Cancel
                    </button>
                    <button className="text-blue-500 hover:underline">
                      Reschedule
                    </button>
                  </>
                )}
                <button className="text-gray-500 hover:underline">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-gray-100 rounded-lg p-4 mt-8">
        <h2 className="text-lg font-bold mb-2">Summary</h2>
        <p>Total Bookings: {bookings.length}</p>
        <p>
          Completed: {bookings.filter((b) => b.status === "Completed").length}
        </p>
        <p>
          Pending: {bookings.filter((b) => b.status === "Pending").length}
        </p>
        <p>
          Cancelled: {bookings.filter((b) => b.status === "Cancelled").length}
        </p>
        <p>
          In Progress: {bookings.filter((b) => b.status === "In Progress").length}
        </p>
        <p>
          Payment Pending: {bookings.filter((b) => b.status === "Payment Pending").length} {/* New summary */}
        </p>
        <p>
          Awaiting Confirmation: {bookings.filter((b) => b.status === "Awaiting Confirmation").length} {/* New summary */}
        </p>
      </div>
    </div>
  );
};

export default CombinedBookingHistory;
