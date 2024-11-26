import React, { useState } from "react";

const SupportHelp = () => {
  // State to handle search input
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data for help topics
  const helpTopics = [
    { title: "Using Support", description: "Get to know how to use our support platform." },
    { title: "User Guide", description: "Step-by-step guides to get you started." },
    { title: "Troubleshooting", description: "Find solutions for common issues." },
    { title: "Announcements", description: "Stay updated on the latest changes." },
    { title: "Security", description: "Learn how to protect your account." },
    { title: "Community Help", description: "Ask questions and engage with others." },
  ];

  // Function to handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter help topics based on the search query
  const filteredTopics = helpTopics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Need Help? We're Here for You!</h1>
          <p className="text-xl mb-8">Find answers, explore solutions, or contact our team.</p>
          {/* Search Bar */}
          <div className="relative max-w-3xl mx-auto">
            <input
              type="text"
              placeholder="Search our Help Center..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full py-4 px-6 rounded-full text-lg border-2 border-white bg-white text-gray-800 focus:outline-none focus:ring-4 focus:ring-teal-500"
            />
            <button className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 3a8 8 0 011.09 15.803 4.009 4.009 0 002.002-2.24A8.004 8.004 0 0111 3z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Support Options */}
        <section>
          <h2 className="text-3xl font-semibold text-teal-800 text-center mb-12">Popular Help Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredTopics.length > 0 ? (
              filteredTopics.map((item) => (
                <div
                  key={item.title}
                  className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <h3 className="text-2xl font-semibold text-teal-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-3">No topics found for "{searchQuery}"</p>
            )}
          </div>
        </section>

        {/* Common Questions Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold text-teal-800 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              "Top questions",
              "Business rules",
              "Security concerns",
              "Account issues",
              "Payment inquiries",
              "Technical help",
              "Integrations",
              "Support tickets",
            ].map((tag) => (
              <span
                key={tag}
                className="px-6 py-3 bg-gradient-to-r from-teal-400 to-teal-500 text-white rounded-full text-lg cursor-pointer hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-600 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-teal-800 mb-6">Still Need Assistance?</h2>
          <p className="text-gray-600 mb-8">
            Our support team is always available to help. Click the button below to reach us directly.
          </p>
          <button className="px-8 py-4 bg-teal-600 text-white text-lg font-semibold rounded-lg shadow-xl hover:bg-teal-700 transition-all duration-300">
            Contact Support
          </button>
        </section>
      </main>
    </div>
  );
};

export default SupportHelp;