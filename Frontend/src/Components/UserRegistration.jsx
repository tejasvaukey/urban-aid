import { UserAddress, UserForm, UserOTP, UserTerms } from "../components/index";
import { useState } from "react";

function UserRegistration() {
  const [page, setPage] = useState(0);
  const pageTitle = [
    "1. Enter credentials",
    "2. OTP",
    "3. Address",
    "Terms and Conditions",
  ];
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    verified: false,

    addressHolderName: "",
    addressPhoneNo: "",
    addressName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    readTerms: false,
  });

  const PageDisplay = () => {
    if (page === 0) {
      return <UserForm userData={userData} setUserData={setUserData} />;
    } else if (page === 1) {
      return <UserOTP userData={userData} setUserData={setUserData} />;
    } else if (page === 2) {
      return <UserAddress userData={userData} setUserData={setUserData} />;
    } else {
      return <UserTerms userData={userData} setUserData={setUserData} />;
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      <h4 className="text-blue-950 font-extrabold absolute text-4xl p-10">
        Urban Aid
      </h4>
      <div className="h-svh w-full flex ">
        {/* Left Side  */}
        <div className="h-full w-1/2 p-10 bg-gradient-to-br from-white to-blue-100">
          <p className=" mt-14 mb-8">Your Go-To Solution for Local Services</p>
          <div className="border-t-2 border-blue-900 mb-8"></div>
          <h2 className="text-xl font-bold mb-6 italic underline">
            Register as a User
          </h2>

          {/* Form  */}
          <h3 className="font-semibold mb-2 text-lg">{pageTitle[page]}</h3>
          <div>{PageDisplay()}</div>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-blue-950 text-white rounded-lg mt-5"
              onClick={() => setPage((currentPage) => currentPage - 1)}
              disabled={page == 0}
            >
              Prev
            </button>
            <button
              className="px-4 py-2 bg-blue-950 text-white rounded-lg mt-5"
              onClick={() => {
                if (page === 1 && userData.verified === false) {
                  alert("Not verified");
                } else {
                  setPage((currentPage) => currentPage + 1);
                }
              }}
            >
              {page === pageTitle.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>

        {/* Right Side  */}
        <div className="h-full w-1/2 p-10 bg-gradient-to-r from-blue-950 to-black text-white flex flex-col justify-center text-center gap-10">
          <div className="flex flex-col justify-center text-center gap-10 ">
            <h2 className="text-[#21e5ff] text-3xl italic font-bold -mt-28">
              Start offering your expertise to a growing community.
            </h2>

            <div className=" flex justify-center gap-5">
              <p className="pb-3 text-l font-semibold">🌍 Expand Your Reach</p>
              <p className="pb-3 text-l font-semibold">
                🕒 Flexible Work Opportunities
              </p>
              <p className="pb-3 text-l font-semibold">
                💸 Boost Your Earnings
              </p>
              <p className="pb-3 text-l font-semibold">💳 Quick Payments</p>
            </div>

            <div className="flex justify-center">
              <button className="bg-[#ffffff] py-2 px-4 rounded-lg font-semibold text-black">
                Register as a Service Provider
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Progress Bar  */}
      <div className="p-10 flex gap-5 w-1/2 absolute bottom-0 ">
        <div className="border border-t-2 bg-blue-300 w-full h-[7px]">
          <div
            className="border border-t-2 border-blue-800 transition-all"
            style={{
              width:
                page === 0
                  ? "25%"
                  : page == 1
                  ? "50%"
                  : page === 2
                  ? "75%"
                  : "100%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
