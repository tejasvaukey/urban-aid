import { useState } from "react";
import UserSide from "./UserSide";
import ProviderSide from "./ProviderSide";
import ServiceProviderForm from "./ServiceProviderForm";

const RegistrationPagw = () => {
  const [page, setPage] = useState(0);
  const pageTitle = [
    "1. Enter credentials",
    "2. OTP",
    "3. Service",
    "4. Address",
    "Terms and Conditions",
  ];

  const PageDisplay = () => {
    // if (page === 0) {
    //   return <UserForm userData={userData} setUserData={setUserData} />;
    // } else if (page === 1) {
    //   return <UserOTP userData={userData} setUserData={setUserData} />;
    // } else if (page === 2) {
    //   return <UserAddress userData={userData} setUserData={setUserData} />;
    // } else {
    //   return <UserTerms userData={userData} setUserData={setUserData} />;
    // }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* header  */}
      <div className="absolute p-10 w-1/2 h-40  ">
        <h4 className="text-white font-extrabold  text-4xl ">Urban Aid</h4>
        <p className="my-6 text-white ">
          Your Go-To Solution for Local Services
        </p>
        <div className="border-b-2 border-white w-full"></div>
      </div>
      {/* mainbox  */}
      <div className="h-svh w-full flex top-0">
        {/* Left Side  */}
        <div className="h-full w-1/2 p-10  bg-gradient-to-tl from-blue-950 to-black text-white  pt-40">
          <UserSide />
        </div>

        {/* <ProviderSide /> */}
        <div className="h-full w-1/2 p-10  bg-gradient-to-tl from-white to-blue-200 relative  pt-40">
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
                if (page === 1) {
                  alert("Not verified");
                } else {
                  setPage((currentPage) => currentPage + 1);
                }
              }}
            >
              {page === pageTitle.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
          <ServiceProviderForm />
        </div>
      </div>
      {/* Right Side  */}
    </div>
  );
};

export default RegistrationPagw;
