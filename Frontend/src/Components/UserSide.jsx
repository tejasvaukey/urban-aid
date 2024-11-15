import { Link } from "react-router-dom";

const UserSide = () => {
  return (
    <div className="flex flex-col justify-center  text-center gap-10 h-full transform -translate-y-14">
      <h2 className="text-blue-500 text-3xl italic font-bold ">
        Find Trusted Experts for Your Every Need
      </h2>

      <div className=" flex justify-center gap-5">
        <p className="pb-3 text-l font-semibold  ">🌍 Access Local Experts</p>
        <p className="pb-3 text-l font-semibold">🕒 On-Demand Assistance</p>
        <p className="pb-3 text-l font-semibold">💸 Transparent Pricing</p>
        <p className="pb-3 text-l font-semibold">
          💳 Secure, Hassle-Free Payments
        </p>
      </div>

      <div className="flex justify-center">
        <Link rel="stylesheet" href="/register/user">
          <button className="bg-blue-500 py-2 px-4 rounded-lg font-semibold text-white">
            Register as a User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserSide;
