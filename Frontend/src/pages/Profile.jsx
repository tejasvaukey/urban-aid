import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-900 p-5 flex flex-col">
        <div className="text-lg font-semibold mb-8">Urban Aid</div>
        <nav className="space-y-4">
          <button className="text-left w-full hover:text-gray-400">Home</button>
          <button className="text-left w-full hover:text-gray-400">
            Profile
          </button>
          <button className="text-left w-full hover:text-gray-400">
            Booking History
          </button>
          <button className="text-left w-full hover:text-gray-400">
            Pending Bookings
          </button>
          <button className="text-left w-full hover:text-gray-400">
            Explore Providers
          </button>
        </nav>
        <button className="mt-auto py-2 text-gray-200 hover:text-gray-400">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="w-4/5 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Urban Aid</h1>
          <div className="flex items-center space-x-4">
            <button className="hover:text-gray-400">Provide Services</button>
            <button className="bg-gray-700 rounded-full h-8 w-8 flex items-center justify-center">
              J
            </button>
          </div>
        </header>

        {/* Profile Section */}
        <section className="bg-gray-900 p-8 rounded-lg shadow-lg">
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

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-400">
          <div className="text-lg font-semibold mb-4">Urban Aid</div>
          <button className="mb-4 bg-gray-700 py-2 px-4 rounded hover:bg-gray-600">
            Download App
          </button>
          <div className="flex justify-center space-x-4 mb-4">
            <span>Twitter</span>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>
          <div className="space-y-2 text-sm">
            <span>About Us</span>
            <span>Terms and Conditions</span>
            <span>Help/FAQ</span>
            <span>Contact Us</span>
          </div>
          <p className="mt-4 text-xs">© 2024 Urban Aid. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default ProfilePage;
