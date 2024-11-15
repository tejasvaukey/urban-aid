import { Link } from "react-router-dom";

const ProviderSide = () => {
  return (
    <div className="flex flex-col justify-center  text-center gap-10 h-full transform -translate-y-14">
      <h2 className="text-blue-900 text-3xl italic font-bold  ">
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
        <Link rel="stylesheet" href="/register/user">
          <button className="bg-blue-900 py-2 px-4 rounded-lg font-semibold text-white">
            Register as a Service Provider
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProviderSide;
