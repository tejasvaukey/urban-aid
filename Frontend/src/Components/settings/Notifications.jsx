import React, { useState } from "react";
import { FaRegBell, FaCreditCard, FaTag, FaBox } from "react-icons/fa";

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expanded, setExpanded] = useState(null);

  const notifications = {
    all: [
      { id: 1, type: "order", title: "Order Confirmed", message: "Your order #12345 has been confirmed." },
      { id: 2, type: "payment", title: "Payment Due", message: "Your payment for order #12345 is due soon." },
      { id: 3, type: "offer", title: "Special Offer", message: "Get 20% off your next purchase using code 'SPECIAL20'." },
    ],
    orders: [
      { id: 1, title: "Order #12345 Confirmed", message: "Your order #12345 has been confirmed." },
      { id: 2, title: "Order #12346 Shipped", message: "Your order #12346 is on the way!" },
    ],
    payments: [
      { id: 1, title: "Payment Reminder", message: "Your payment for order #12345 is due in 2 days." },
    ],
    offers: [
      { id: 1, title: "Exclusive Discount", message: "Enjoy 15% off on your next purchase with code 'DISCOUNT15'." },
    ],
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleToggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const iconMapping = {
    order: <FaBox />,
    payment: <FaCreditCard />,
    offer: <FaTag />,
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mb-6">
          {["all", "orders", "payments", "offers"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-2 rounded-lg text-lg font-semibold transition transform ${
                activeTab === tab
                  ? "bg-teal-600 text-white scale-105"
                  : "bg-white text-gray-700 hover:bg-teal-100 hover:text-teal-600"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Notifications */}
        <div className="space-y-6">
          {notifications[activeTab].map((notification) => (
            <div
              key={notification.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all p-6"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <span className="text-teal-500 text-xl">{iconMapping[notification.type]}</span>
                  <h3 className="text-xl font-semibold text-gray-800">{notification.title}</h3>
                </div>
                <button
                  onClick={() => handleToggleExpand(notification.id)}
                  className="text-teal-500 hover:text-teal-700 font-semibold"
                >
                  {expanded === notification.id ? "Hide Details" : "View Details"}
                </button>
              </div>

              <p className="text-gray-600 mt-2">{notification.message}</p>

              {/* Expanded Details Section */}
              {expanded === notification.id && (
                <div className="mt-4 bg-gray-50 p-4 rounded-md">
                  <p className="text-gray-700">
                    Here are additional details about this notification...
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
