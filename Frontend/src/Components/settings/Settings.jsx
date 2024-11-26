import React, { useState } from "react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({
    username: "JohnDoe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    bio: "A passionate service provider.",
  });
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    smsAlerts: false,
  });
  const [theme, setTheme] = useState("light");
  const [security, setSecurity] = useState({
    password: "",
    twoFactor: false,
  });
  const [language, setLanguage] = useState("en");
  const [timezone, setTimezone] = useState("UTC");
  const [profilePic, setProfilePic] = useState(null);
  const [isDeactivated, setIsDeactivated] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(true);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleNotificationChange = (type) => {
    setNotifications((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleSecurityToggle = () => {
    setSecurity((prev) => ({ ...prev, twoFactor: !prev.twoFactor }));
  };

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleAccountDeactivation = () => {
    setIsDeactivated(true);
    // Additional logic for deactivation (like API calls) can be added here
  };

  const handleAccountDeletion = () => {
    // Handle account deletion with confirmation
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action is irreversible."
      )
    ) {
      // Logic for deleting account
      alert("Account deleted.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-700">Settings</h1>
        <div className="flex space-x-6">
          <button
            className={`text-lg ${
              activeTab === "profile" ? "text-blue-600" : "text-gray-600"
            }`}
            onClick={() => handleTabChange("profile")}
          >
            Profile
          </button>
          <button
            className={`text-lg ${
              activeTab === "notifications" ? "text-blue-600" : "text-gray-600"
            }`}
            onClick={() => handleTabChange("notifications")}
          >
            Notifications
          </button>
          <button
            className={`text-lg ${
              activeTab === "security" ? "text-blue-600" : "text-gray-600"
            }`}
            onClick={() => handleTabChange("security")}
          >
            Security
          </button>
          <button
            className={`text-lg ${
              activeTab === "payment methods"
                ? "text-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => handleTabChange("payment methods")}
          >
            Payment Methods
          </button>
          <button
            className={`text-lg ${
              activeTab === "theme" ? "text-blue-600" : "text-gray-600"
            }`}
            onClick={() => handleTabChange("theme")}
          >
            Theme
          </button>
          <button
            className={`text-lg ${
              activeTab === "language" ? "text-blue-600" : "text-gray-600"
            }`}
            onClick={() => handleTabChange("language")}
          >
            Language
          </button>
          <button
            className={`text-lg ${
              activeTab === "subscription" ? "text-blue-600" : "text-gray-600"
            }`}
            onClick={() => handleTabChange("subscription")}
          >
            Subscription
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Profile Settings
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Username</label>
                <input
                  type="text"
                  value={profile.username}
                  onChange={(e) =>
                    setProfile({ ...profile, username: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg p-3"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg p-3"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Phone Number</label>
                <input
                  type="text"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg p-3"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Bio</label>
                <textarea
                  value={profile.bio}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg p-3"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 mb-2">Profile Picture</label>
                <input
                  type="file"
                  onChange={handleProfilePicChange}
                  className="border border-gray-300 rounded-lg p-3"
                />
                {profilePic && (
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="mt-4 w-32 h-32 rounded-full"
                  />
                )}
              </div>
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg">
              Save Changes
            </button>
          </div>
        )}

        {/* Notification Preferences */}
        {activeTab === "notifications" && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Notification Preferences
            </h2>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={notifications.emailNotifications}
                onChange={() => handleNotificationChange("emailNotifications")}
                className="mr-2"
              />
              <label>Email Notifications</label>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={notifications.pushNotifications}
                onChange={() => handleNotificationChange("pushNotifications")}
                className="mr-2"
              />
              <label>Push Notifications</label>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked={notifications.smsAlerts}
                onChange={() => handleNotificationChange("smsAlerts")}
                className="mr-2"
              />
              <label>SMS Alerts</label>
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg">
              Save Changes
            </button>
          </div>
        )}

        {/* Security Settings */}
        {activeTab === "security" && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
            <div className="flex items-center mb-4">
              <label className="mr-4">Enable Two-Factor Authentication</label>
              <input
                type="checkbox"
                checked={security.twoFactor}
                onChange={handleSecurityToggle}
                className="mr-2"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="text-gray-600 mb-2">Change Password</label>
              <input
                type="password"
                value={security.password}
                onChange={(e) =>
                  setSecurity({ ...security, password: e.target.value })
                }
                className="border border-gray-300 rounded-lg p-3"
              />
            </div>
            <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg">
              Save Changes
            </button>
          </div>
        )}

        {/* Payment Methods */}
        {activeTab === "payment methods" && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
            <p className="mb-4">Add or update your payment methods here.</p>
            {/* You can integrate forms for adding cards or other payment methods */}
            <button className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg">
              Save Changes
            </button>
          </div>
        )}

        {/* Theme Settings */}
        {activeTab === "theme" && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>
            <button
              onClick={handleThemeChange}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg"
            >
              Switch to {theme === "light" ? "Dark" : "Light"} Theme
            </button>
          </div>
        )}

        {/* Language Settings */}
        {activeTab === "language" && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Language Settings</h2>
            <select
              value={language}
              onChange={handleLanguageChange}
              className="border border-gray-300 rounded-lg p-3"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        )}

        {/* Subscription Settings */}
        {activeTab === "subscription" && (
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Subscription Plan
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <label className="text-gray-600 mr-4">Current Plan: </label>
                <span className="font-semibold">
                  {isSubscribed ? "Premium" : "Free"}
                </span>
              </div>
              <button
                onClick={() => setIsSubscribed(!isSubscribed)}
                className={`py-2 px-6 rounded-lg ${
                  isSubscribed
                    ? "bg-red-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {isSubscribed ? "Cancel Subscription" : "Upgrade to Premium"}
              </button>

              {/* Premium Benefits Section */}

              <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Benefits of Premium Subscription
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✔️</span>
                    <span className="text-gray-700">
                      Access to exclusive premium content
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✔️</span>
                    <span className="text-gray-700">Ad-free experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✔️</span>
                    <span className="text-gray-700">
                      Priority customer support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✔️</span>
                    <span className="text-gray-700">
                      Access to premium tools and features
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 text-xl mr-3">✔️</span>
                    <span className="text-gray-700">
                      Early access to new updates and releases
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
