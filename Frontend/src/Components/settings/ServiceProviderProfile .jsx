import React, { useState } from "react";
import { 
  FaStar, FaUserAlt, FaPhoneAlt, FaEnvelope, FaHome, FaTools, 
  FaClock, FaDollarSign, FaImages, FaChartBar, FaBell, FaEye, 
  FaCreditCard, FaMapMarkedAlt, FaFileAlt, FaQuestionCircle 
} from "react-icons/fa";

const ServiceProviderProfile = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    phone: "12345XXXXX",
    email: "john.doe@example.com",
    address: "123 Street, City, State",
    services: "Plumbing Repair, Pipe Installation",
    availability: "Mon-Fri, 9 AM - 6 PM",
    pricing: "₹500 per hour",
    gallery: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    profileImage: "https://via.placeholder.com/150",
    rating: 4.5,
  });

  const [documents, setDocuments] = useState([]);
  const [earnings, setEarnings] = useState({ total: 15000, monthly: 5000 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, profileImage: imageUrl });
    }
  };

  const handleGalleryUpload = (e) => {
    const files = Array.from(e.target.files);
    const galleryImages = files.map((file) => URL.createObjectURL(file));
    setProfile((prev) => ({
      ...prev,
      gallery: [...prev.gallery, ...galleryImages],
    }));
  };

  const handleDocumentUpload = (e) => {
    const files = Array.from(e.target.files);
    setDocuments((prev) => [...prev, ...files]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 flex items-center">
          <FaUserAlt className="mr-2 text-blue-500" /> Manage Profile
        </h1>

        {/* Profile Picture */}
        <div className="flex items-center mb-6">
          <div className="relative w-32 h-32">
            <img
              src={profile.profileImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border border-gray-300 shadow"
            />
            <label
              htmlFor="profileImage"
              className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer shadow-md hover:bg-blue-600"
            >
              ✎
            </label>
            <input
              id="profileImage"
              type="file"
              accept="image/*"
              onChange={handleProfileImageUpload}
              className="hidden"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p className="text-gray-600">{profile.email}</p>
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-500 mr-1" />
              <span className="text-gray-600">{profile.rating} / 5.0</span>
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2 flex items-center">
            <FaUserAlt className="mr-2 text-blue-500" /> Basic Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-medium flex items-center">
                <FaPhoneAlt className="mr-2 text-green-500" /> Phone
              </label>
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-medium flex items-center">
                <FaEnvelope className="mr-2 text-red-500" /> Email
              </label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-medium flex items-center">
                <FaHome className="mr-2 text-purple-500" /> Address
              </label>
              <textarea
                name="address"
                value={profile.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </section>

        {/* Earnings and Statistics */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2 flex items-center">
            <FaChartBar className="mr-2 text-green-500" /> Earnings and Statistics
          </h2>
          <p>Total Earnings: ₹{earnings.total}</p>
          <p>Monthly Earnings: ₹{earnings.monthly}</p>
        </section>

        {/* Notifications */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2 flex items-center">
            <FaBell className="mr-2 text-yellow-500" /> Notifications
          </h2>
          <p>Manage your notification preferences here.</p>
        </section>

        {/* Profile Visibility */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2 flex items-center">
            <FaEye className="mr-2 text-blue-400" /> Profile Visibility
          </h2>
          <p>Control who can view your profile.</p>
        </section>

        {/* Payment Settings */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2 flex items-center">
            <FaCreditCard className="mr-2 text-indigo-500" /> Payment Settings
          </h2>
          <p>Configure your payment details and preferences.</p>
        </section>

        {/* Services Coverage Map */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2 flex items-center">
            <FaMapMarkedAlt className="mr-2 text-red-400" /> Services Coverage Map
          </h2>
          <p>Define the regions you serve.</p>
        </section>

        {/* Document Upload */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2 flex items-center">
            <FaFileAlt className="mr-2 text-gray-500" /> Document Upload
          </h2>
          <input type="file" multiple onChange={handleDocumentUpload} />
          <ul>
            {documents.map((doc, idx) => (
              <li key={idx}>{doc.name}</li>
            ))}
          </ul>
        </section>

        {/* Help & Support */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2 flex items-center">
            <FaQuestionCircle className="mr-2 text-orange-500" /> Help & Support
          </h2>
          <p>Contact support or find FAQs.</p>
        </section>

        {/* Save Button */}
        <button className="w-full py-2 bg-blue-500 text-white rounded">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ServiceProviderProfile;