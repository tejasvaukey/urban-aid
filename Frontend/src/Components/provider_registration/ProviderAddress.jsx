const ProviderAddress = ({ userData, setUserData, pageTitle, page }) => {
  return (
    <div>
      <h2 className="text-blue-900 text-3xl italic font-bold ">
        Register as a User
      </h2>
      <h3 className="font-semibold mb-2 mt-10 text-lg">{pageTitle[page]}</h3>
      <div className="flex justify-between items-center w-1/2 ">
        <button className="text-sm text-blue-500">
          Use my current location
        </button>
        <button className="text-sm text-blue-500">skip</button>
      </div>
      <form onSubmit={(e) => handleAddress(e)}>
        <div className="mb-2">
          <p>Full Name</p>
          <input
            onChange={(e) =>
              setUserData({ ...userData, addressHolderName: e.target.value })
            }
            value={userData.addressHolderName}
            required
            type="text"
            className="border-b-2 border-black w-1/2 bg-transparent outline-none"
            placeholder="Type owner's name"
          />
        </div>
        <div className="mb-2">
          <p>Phone no.</p>
          <input
            onChange={(e) =>
              setUserData({ ...userData, addressPhoneNo: e.target.value })
            }
            value={userData.addressPhoneNo}
            required
            type="text"
            className="border-b-2 border-black w-1/2 bg-transparent outline-none"
            placeholder="Owner's phone no."
          />
        </div>
        <div className="mb-2">
          <p>Appartment name/House no.</p>
          <input
            onChange={(e) =>
              setUserData({ ...userData, addressName: e.target.value })
            }
            value={userData.addressName}
            type="text"
            className="border-b-2 border-black w-1/2 bg-transparent outline-none"
            placeholder="Building, Flat name/no."
          />
        </div>
        <div className="mb-2">
          <p>Street Address</p>
          <input
            onChange={(e) =>
              setUserData({ ...userData, streetAddress: e.target.value })
            }
            value={userData.streetAddress}
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
              onChange={(e) =>
                setUserData({ ...userData, city: e.target.value })
              }
              value={userData.city}
              required
              type="text"
              className="border-b-2 border-black w-full bg-transparent outline-none"
              placeholder=""
            />
          </div>
          <div className="w-1/2">
            <p>State</p>
            <input
              onChange={(e) =>
                setUserData({ ...userData, state: e.target.value })
              }
              value={userData.state}
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
              onChange={(e) =>
                setUserData({ ...userData, zipcode: e.target.value })
              }
              value={userData.zipcode}
              required
              type="text"
              className="border-b-2 border-black w-full bg-transparent outline-none"
              placeholder=""
            />
          </div>
          <div className="w-1/2">
            <p>Country</p>
            <input
              onChange={(e) =>
                setUserData({ ...userData, country: e.target.value })
              }
              value={userData.country}
              required
              type="text"
              className="border-b-2 border-black w-full bg-transparent outline-none"
              placeholder=""
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProviderAddress;
