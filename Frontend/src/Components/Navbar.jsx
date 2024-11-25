import { useState, useRef, useEffect } from "react";
import logoImage from "../assets/images/logo2.jpg";
import LoginCard from "./LoginCard"; // Import LoginCard component

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showLoginCard, setShowLoginCard] = useState(false);
  const loginCardRef = useRef(null);

  const toggleLoginCard = () => {
    setShowLoginCard((prev) => !prev);
  };

  // Close LoginCard if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginCardRef.current &&
        !loginCardRef.current.contains(event.target)
      ) {
        setShowLoginCard(false);
      }
    };

    if (showLoginCard) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLoginCard]);

  return (
    <>
      {/* Navbar */}
      <nav className="py-4 px-24 h-20 w-full fixed z-20 text-white bg-white bg-opacity-10 backdrop-blur-sm">
        <header className="flex justify-between items-center px-3 rounded-full">
          {/* Logo Section */}
          <div className="flex items-center justify-start w-1/5">
            <img
              src={logoImage}
              alt="Logo"
              className="w-10 h-10 bg-color2 mr-2 rounded-full"
            />
            <h4 className="font-bold tracking-wide text-white text-2xl leading-none shadoww">
              Urban Aid
            </h4>
          </div>

          {/* Search Section */}
          <div className="px-5 rounded-full w-2/5 flex items-center border border-gray-300">
            <input
              type="text"
              className="flex-grow outline-none h-10 bg-transparent text-white placeholder-gray-600 font-semibold"
              placeholder="Search for service..."
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="white"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </button>
          </div>

          {/* Links and Login Section */}
          <div className="flex justify-end gap-5 items-center w-1/5 font-semibold">
            {/* Provide Services Link */}
            <div>
              <a
                href="/"
                className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Provide Services
              </a>
            </div>

            {/* Orders Link */}
            {isLoggedIn && (
              <div>
                <a
                  href="/orders"
                  className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 mx-7"
                >
                  Orders
                </a>
              </div>
            )}

            {/* Login Button or Profile Avatar */}
            {isLoggedIn ? (
              <div className="w-10 h-10 bg-white rounded-full"></div>
            ) : (
              <button
                onClick={toggleLoginCard}
                className="border-2 border-white px-4 py-1 rounded-full bg-white hover:bg-transparent text-black hover:text-white"
              >
                Log In
              </button>
            )}
          </div>
        </header>
      </nav>

      {/* Login Card */}
      {showLoginCard && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div
            ref={loginCardRef}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()} // Prevent propagation to overlay
          >
            <LoginCard />
          </div>
        </div>
      )}
    </>
  );
}
