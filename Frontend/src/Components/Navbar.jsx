
import logoImage from "../assets/images/logo2.jpg";
import { useState } from "react";

export default function Navbar() {


  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <nav className=" py-2 px-1 h-20 w-full fixed z-40 ">
        <header className="flex justify-between items-center  px-20 py-2 rounded-full  bg-opacity-10 backdrop-blur-sm">
          <div className="flex items-center justify-start w-1/5">
            <img
              src={logoImage}
              alt="Logo"
              className="w-10 h-10 bg-color2 mr-2 rounded-full"
            />
            <h4 className="font-bold tracking-wide  text-2xl leading-none shadoww">
              Urban Aid
            </h4>
          </div>
          <div className="px-5 rounded-full w-2/5 flex items-center border ">
            <input
              type="text"
              className="flex-grow outline-none h-10 bg-transparent text-white  placeholder-gray-800 font-semibold "
              placeholder="Search for service..."
            />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="black"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </button>
          </div>
          <div className="flex justify-end gap-5 items-center w-1/5 font-semibold ">
            <div>
              <a
                href="/"
                className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                Provide Services
              </a>
            </div>
            <div>
              {isLoggedIn ? <a
                href="/"
                className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 mx-7"
              >
                Orders
              </a> : ""}
            </div>
            {isLoggedIn ? <div className="w-10 h-10 bg-color1 rounded-full"></div> : <button className="border-2 border-white px-4 py-1 rounded-full bg-white hover:bg-transparent text-black hover:text-white">Log In</button>}
          </div>
        </header>
      </nav>
    </>
  );
}
