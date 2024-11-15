import { useState } from "react";

export default function OTP({ userData, setUserData }) {
  const [isVerified, setIsVerified] = useState(false);
  const handleVerification = () => {
    setIsVerified(!isVerified);
    setUserData({ ...userData, verified: true });
  };
  return (
    <div className="">
      <form className=" mb-5">
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
