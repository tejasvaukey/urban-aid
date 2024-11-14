import { UserAddress } from "../components/index";
import { useState } from "react";

export default function Register() {
  const [registrationPage, setRegistrationPage] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [users, setUsers] = useState([]);
  const handleUser = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      phone,
      email,
      password,
    };
    setUsers([...users, newUser]);
  };

  //   const handleRegistrationPage = () => {
  //     setRegistrationPage(registrationPage + 1);
  //   };

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      <div className="h-svh w-full flex absolute top-0">
        <div className="h-full w-1/2 p-10 bg-gradient-to-br from-white to-blue-100">
          <h4 className="text-blue-950 font-extrabold  text-4xl">Urban Aid</h4>
          <p className=" mt-4 mb-8">Your Go-To Solution for Local Services</p>
          <div className="border-t-2 border-blue-900 mb-8"></div>
          <h2 className="text-xl font-bold mb-6 italic underline">
            Register as a User
          </h2>

          {/* Form  */}
          <div className="hidden">
            <h3 className="font-semibold mb-2 text-lg">1. Enter credentials</h3>
            <form onSubmit={(e) => handleUser(e)}>
              <div className="mb-5">
                <p className="text-xl mb-2">Name</p>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                  type="text"
                  className="border-b-2 border-black w-full bg-transparent outline-none"
                  placeholder="Type your name"
                />
              </div>
              <div className="mb-5">
                <p className="text-xl mb-2">Phone no.</p>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  required
                  type="text"
                  className="border-b-2 border-black w-full bg-transparent outline-none"
                  placeholder="Enter Phone no."
                />
              </div>
              <div className="mb-5">
                <p className="text-xl mb-2">Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  className="border-b-2 border-black w-full bg-transparent outline-none"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-5">
                <p className="text-xl mb-2">Password</p>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  type="password"
                  className="border-b-2 border-black w-full bg-transparent outline-none"
                  placeholder="Password"
                />
              </div>
              <button className="px-4 py-2 bg-blue-950 text-white rounded-lg mt-5 ">
                Next
              </button>
            </form>
          </div>
          {/* OTP  */}
          
          {/* Address  */}
          <UserAddress />
        </div>
        <div className="h-full w-1/2 p-10 bg-gradient-to-r from-blue-950 to-black text-white flex flex-col justify-center text-center gap-10">
          <h2 className="text-[#21e5ff] text-3xl italic font-bold -mt-32">
            Start offering your expertise to a growing community.
          </h2>

          <div className=" flex justify-center gap-5">
            <p className="pb-3 text-l font-semibold">🌍 Expand Your Reach</p>
            <p className="pb-3 text-l font-semibold">
              🕒 Flexible Work Opportunities
            </p>
            <p className="pb-3 text-l font-semibold">💸 Boost Your Earnings</p>
            <p className="pb-3 text-l font-semibold">💳 Quick Payments</p>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#ffffff] py-2 px-4 rounded-lg font-semibold text-black">
              Register as a Service Provider
            </button>
          </div>
        </div>
      </div>

      <div className="p-10 flex gap-5 w-1/2 absolute bottom-0">
        {registrationPage === 1 ? (
          <div className="border border-t-2 border-blue-300 w-1/3"></div>
        ) : (
          <div className="border border-t-2 border-blue-800 w-1/3"></div>
        )}
        {registrationPage === 2 ? (
          <div className="border border-t-2 border-blue-300 w-1/3"></div>
        ) : (
          <div className="border border-t-2 border-blue-800 w-1/3"></div>
        )}
        {registrationPage === 3 ? (
          <div className="border border-t-2 border-blue-300 w-1/3"></div>
        ) : (
          <div className="border border-t-2 border-blue-800 w-1/3"></div>
        )}
        {registrationPage === 4 ? (
          <div className="border border-t-2 border-blue-300 w-1/3"></div>
        ) : (
          <div className="border border-t-2 border-blue-800 w-1/3"></div>
        )}
      </div>
    </div>
  );
}
