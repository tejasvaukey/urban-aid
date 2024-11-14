const UserAddress = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-1/2">
        <h3 className="font-semibold mb-2 text-lg">3. Address</h3>
        <button className="text-sm text-blue-500">
          Use my current location
        </button>
      </div>
      <form>
        <div className="mb-2">
          <p>Full Name</p>
          <input
            required
            type="text"
            className="border-b-2 border-black w-1/2 bg-transparent outline-none"
            placeholder="Type owner's name"
          />
        </div>
        <div className="mb-2">
          <p>Phone no.</p>
          <input
            required
            type="text"
            className="border-b-2 border-black w-1/2 bg-transparent outline-none"
            placeholder="Owner's phone no."
          />
        </div>
        <div className="mb-2">
          <p>Appartment name/House no.</p>
          <input
            type="text"
            className="border-b-2 border-black w-1/2 bg-transparent outline-none"
            placeholder="Building, Flat name/no."
          />
        </div>
        <div className="mb-2">
          <p>Street Address</p>
          <input
            required
            type="text"
            className="border-b-2 border-black w-1/2 bg-transparent outline-none"
            placeholder="Area, Locality"
          />
        </div>
        <div className="flex justify-between w-1/2 gap-2 mb-2">
          <div className="w-1/2">
            <p>City</p>
            <input
              required
              type="text"
              className="border-b-2 border-black w-full bg-transparent outline-none"
              placeholder=""
            />
          </div>
          <div className="w-1/2">
            <p>State</p>
            <input
              required
              type="text"
              className="border-b-2 border-black w-full bg-transparent outline-none"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex justify-between w-1/2 gap-2 mb-2">
          <div className="w-1/2">
            <p>Zipcode</p>
            <input
              required
              type="text"
              className="border-b-2 border-black w-full bg-transparent outline-none"
              placeholder=""
            />
          </div>
          <div className="w-1/2">
            <p>Country</p>
            <input
              required
              type="text"
              className="border-b-2 border-black w-full bg-transparent outline-none"
              placeholder=""
            />
          </div>
        </div>
      </form>
      <button className="text-sm text-blue-500">skip</button>
    </div>
  );
};

export default UserAddress;
