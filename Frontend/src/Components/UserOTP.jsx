import { useState } from "react";

export default function OTP() {
  const [isVerified, setIsVerified] = useState(false);
  return (
    <div className="">
        <h3 className="font-semibold mb-2 text-lg">2. OTP</h3>
      <form className=" mb-5">
        <div className="border-b-2 border-black flex justify-between  w-1/3 mt-2">
          <input
            type="text"
            className="outline-none bg-transparent"
            placeholder="Enter OTP sent to your Phone no."
          />
          <button onClick={() => setIsVerified}>
            {isVerified ? "verified" : "verify"}
          </button>
        </div>
      </form>
      
    </div>
  );
}
