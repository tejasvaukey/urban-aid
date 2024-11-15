import { useState } from "react";
import UserSide from "./UserSide";
import ProviderSide from "./ProviderSide";

const ProviderRegistration = () => {
  const [page, setPage] = useState(0);
  const pageTitle = [
    "1. Enter credentials",
    "2. OTP",
    "3. Service",
    "4. Address",
    "Terms and Conditions",
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* header  */}
      <div className="absolute p-10 w-1/2">
        <h4 className="text-white font-extrabold  text-4xl ">Urban Aid</h4>
        <p className="my-6 text-white ">
          Your Go-To Solution for Local Services
        </p>
        <div className="border-b-2 border-white w-full"></div>
      </div>
      {/* mainbox  */}
      <div className="h-svh w-full flex top-0 ">
        {/* Left Side  */}
        <div className="h-full w-1/2 p-10 bg-gradient-to-r from-blue-950 to-black text-white ">
          <ProviderSide />
        </div>
        {/* Right Side  */}
        <div className="h-full w-1/2 p-10 bg-gradient-to-br from-white to-blue-200 ">
          <UserSide />
        </div>
      </div>

      {/* Progress Bar  */}
      {/* <div className="p-10 flex gap-5 w-1/2 absolute bottom-0 ">
        <div className="border border-t-2 bg-blue-300 w-full h-[7px]"></div>
      </div> */}
    </div>
  );
};

export default ProviderRegistration;
