import { useState } from "react";

export default function OTP({ userData, setUserData, pageTitle, page }) {
  const [isVerified, setIsVerified] = useState(false);
  const handleVerification = () => {
    setIsVerified(!isVerified);
    setUserData({ ...userData, verified: true });
  };
  return (
    <div className="">
      <h2 className="text-blue-900 text-3xl italic font-bold ">
        Register as a User
      </h2>
      <h3 className="font-semibold mb-2 mt-10 text-lg">{pageTitle[page]}</h3>
      <form className=" mb-5 ">
        <div className="border-b-2 border-black flex justify-between  w-1/3 mt-2">
          <input
            type="text"
            className="outline-none bg-transparent"
            placeholder="Enter OTP sent to your Phone no."
          />
          <p onClick={() => handleVerification()} className="cursor-pointer">
            {isVerified ? "verified" : "verify"}
          </p>
        </div>
      </form>
    </div>
  );
}
