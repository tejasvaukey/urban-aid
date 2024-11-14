import { useState } from "react";

const UserAddress = () => {
  const [addressHolderName, setaddressHolderName] = useState("");
  const [addressPhoneNo, setAddressPhoneNo] = useState("");
  const [addressName, setAddressName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [UserAddress, setUserAddress] = useState([]);
  const handleAddress = (e) => {
    e.prventDefault();
    const newAddress = {
      addressHolderName,
      addressPhoneNo,
      addressName,
      streetAddress,
      city,
      state,
      zipcode,
      country,
    };
    setUserAddress(newAddress);
    console.log(UserAddress);
  };
  return (
    <div>
      <div className="flex justify-between items-center w-1/2">
        <h3 className="font-semibold mb-2 text-lg">3. Address</h3>
        <button className="text-sm text-blue-500">
          Use my current location
        </button>
      </div>
      <form onSubmit={(e) => handleAddress(e)}>
        <div className="mb-2">
          <p>Full Name</p>
          <input
            value={addressHolderName}
            onChange={(e) => setaddressHolderName(e.target.value)}
            required
            type="text"
            className="border-b-2 border-black w-1/2 bg-transparent outline-none"
            placeholder="Type owner's name"
          />
        </div>
        <div className="mb-2">
          <p>Phone no.</p>
          <input
            value={addressPhoneNo}
            onChange={(e) => setAddressPhoneNo(e.target.value)}
            required
            type="text"
            className="border-b-2 border-black w-1/2 bg-transparent outline-none"
            placeholder="Owner's phone no."
          />
        </div>
        <div className="mb-2">
          <p>Appartment name/House no.</p>
          <input
            value={addressName}
            onChange={(e) => setAddressName(e.target.value)}
            type="text"
            className="border-b-2 border-black w-1/2 bg-transparent outline-none"
            placeholder="Building, Flat name/no."
          />
        </div>
        <div className="mb-2">
          <p>Street Address</p>
          <input
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
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
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              type="text"
              className="border-b-2 border-black w-full bg-transparent outline-none"
              placeholder=""
            />
          </div>
          <div className="w-1/2">
            <p>State</p>
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
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
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              required
              type="text"
              className="border-b-2 border-black w-full bg-transparent outline-none"
              placeholder=""
            />
          </div>
          <div className="w-1/2">
            <p>Country</p>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              type="text"
              className="border-b-2 border-black w-full bg-transparent outline-none"
              placeholder=""
            />
          </div>
        </div>
        <button className="text-sm text-blue-500">skip</button> <br />
        <button className="px-4 py-2 bg-blue-950 text-white rounded-lg mt-5">
          Next
        </button>
      </form>
    </div>
  );
};

export default UserAddress;
