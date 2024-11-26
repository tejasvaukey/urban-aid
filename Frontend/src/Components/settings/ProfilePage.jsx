import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white">
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Profile Section */}
        <section className="bg-gray-900 p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-center space-x-6 mb-6">
            <div className="rounded-full bg-gray-700 h-20 w-20 overflow-hidden">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Obama Bin Laden</h2>
              <p>Age: 54</p>
              <p>Contact no.: 12345XXXX</p>
              <p>Email address: obamabinladen@gmail.com</p>
              <button className="mt-2 text-gray-400 hover:text-gray-300">
                Edit profile
              </button>
            </div>
          </div>

          {/* Address Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold">Obama Bin Laden</h3>
              <p>Shivam Complex, Koni</p>
              <p>Bilaspur, Chhattisgarh 495001</p>
              <p>India</p>
              <p>Phone Number: 12345XXXX</p>
              <div className="mt-2 flex space-x-4 text-sm">
                <button className="hover:text-gray-400">Edit</button>
                <button className="hover:text-gray-400">Remove</button>
                <button className="hover:text-gray-400">Set as default</button>
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-center text-gray-400">
              + Add address
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
