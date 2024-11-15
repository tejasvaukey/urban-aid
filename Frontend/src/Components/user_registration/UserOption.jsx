const UserOption = ({ page, setPage }) => {
  return (
    <div className="flex flex-col justify-center  text-center gap-10 h-[700px] ">
      <h2 className="text-blue-900 text-3xl italic font-bold ">
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
        <button
          className="bg-blue-900 py-2 px-4 rounded-lg font-semibold text-white"
          onClick={() => setPage((current) => current + 1)}
        >
          Register as a User
        </button>
      </div>
    </div>
  );
};

export default UserOption;
