import React, { useState } from "react";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    category: "",
    rating: 0,
    description: "",
  });

  const [step, setStep] = useState(1);  // Track current step in feedback process

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.description) {
      alert("Feedback submitted successfully!");
      setFeedback({
        name: "",
        email: "",
        category: "",
        rating: 0,
        description: "",
      });
      setStep(1);  // Reset to the first step after submission
    } else {
      alert("Feedback description is required!");
    }
  };

  return (
    <div className="relative bg-gray-100 h-screen flex flex-col items-center justify-center p-8">
      
      {/* Background Illustration */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?feedback')" }}></div>

      {/* Main Feedback Container */}
      <div className="bg-white shadow-lg rounded-lg p-12 max-w-2xl w-full z-10 relative">
        <h1 className="text-3xl font-semibold text-gray-700 mb-8 text-center">We Value Your Feedback</h1>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Step 1</span>
            <span>Step 2</span>
            <span>Step 3</span>
          </div>
          <div className="h-2 bg-gray-300 rounded-full">
            <div
              className="bg-teal-500 rounded-full transition-all duration-500"
              style={{ width: `${(step - 1) * 33.33}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: User Info */}
        {step === 1 && (
          <form className="space-y-8">
            <div>
              <label className="block text-lg font-medium text-gray-700">Your Name (Optional)</label>
              <input
                type="text"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-lg focus:ring-teal-500 focus:border-teal-500 text-lg"
                placeholder="Enter your name"
                value={feedback.name}
                onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Your Email (Optional)</label>
              <input
                type="email"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-lg focus:ring-teal-500 focus:border-teal-500 text-lg"
                placeholder="Enter your email"
                value={feedback.email}
                onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
              />
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-8 py-4 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xl"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Category & Rating */}
        {step === 2 && (
          <form className="space-y-8">
            <div>
              <label className="block text-lg font-medium text-gray-700">Category</label>
              <select
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-lg focus:ring-teal-500 focus:border-teal-500 text-lg"
                value={feedback.category}
                onChange={(e) => setFeedback({ ...feedback, category: e.target.value })}
              >
                <option value="">Select a category</option>
                <option value="Suggestion">Suggestion</option>
                <option value="Complaint">Complaint</option>
                <option value="Appreciation">Appreciation</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Rating (1-5)</label>
              <input
                type="number"
                max="5"
                min="1"
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-lg focus:ring-teal-500 focus:border-teal-500 text-lg"
                placeholder="Rate us"
                value={feedback.rating}
                onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })}
              />
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-8 py-4 bg-gray-400 text-white rounded-lg shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 text-xl"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-8 py-4 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xl"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Feedback Description */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-lg font-medium text-gray-700">Your Feedback</label>
              <textarea
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-lg focus:ring-teal-500 focus:border-teal-500 text-lg"
                placeholder="Write your feedback here..."
                rows="6"
                value={feedback.description}
                onChange={(e) => setFeedback({ ...feedback, description: e.target.value })}
              ></textarea>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-8 py-4 bg-gray-400 text-white rounded-lg shadow-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 text-xl"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-8 py-4 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xl"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Floating Submit Button (Always Accessible) */}
      <div className="absolute bottom-12 right-12">
        <button
          onClick={() => setStep(1)}
          className="p-8 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FeedbackPage;
