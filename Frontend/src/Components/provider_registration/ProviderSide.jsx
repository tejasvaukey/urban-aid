const ProviderSide = () => {
  return (
    <div className="flex flex-col justify-center  text-center gap-10 h-[700px]  ">
      <h2 className="text-blue-500 text-3xl italic font-bold  ">
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
        <button className="bg-blue-400 py-2 px-4 rounded-lg font-semibold text-black">
          Register as a Service Provider
        </button>
      </div>
    </div>
  );
};

export default ProviderSide;
