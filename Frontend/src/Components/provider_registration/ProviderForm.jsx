function ProviderForm({ providerData, setProviderData, pageTitle, page }) {
  return (
    <div>
      <h2 className="text-blue-900 text-3xl italic font-bold  ">
        Start offering your expertise to a growing community.
      </h2>
      <h3 className="font-semibold mb-2 mt-10 text-lg">{pageTitle[page]}</h3>
      <form>
        <div className="mb-5">
          <p className="text-xl mb-2">Name</p>
          <input
            onChange={(e) =>
              setProviderData({ ...providerData, name: e.target.value })
            }
            value={providerData.name}
            required
            type="text"
            className="border-b-2 border-black w-full bg-transparent outline-none"
            placeholder="Type your name"
          />
        </div>
        <div className="mb-5">
          <p className="text-xl mb-2">Phone no.</p>
          <input
            onChange={(e) =>
              setProviderData({ ...providerData, phone: e.target.value })
            }
            value={providerData.phone}
            required
            type="text"
            className="border-b-2 border-black w-full bg-transparent outline-none"
            placeholder="Enter Phone no."
          />
        </div>
        <div className="mb-5">
          <p className="text-xl mb-2">Email</p>
          <input
            onChange={(e) =>
              setProviderData({ ...providerData, email: e.target.value })
            }
            value={providerData.email}
            type="text"
            className="border-b-2 border-black w-full bg-transparent outline-none"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-5">
          <p className="text-xl mb-2">Create Password</p>
          <input
            onChange={(e) =>
              setProviderData({ ...providerData, password: e.target.value })
            }
            value={providerData.password}
            required
            type="password"
            className="border-b-2 border-black w-full bg-transparent outline-none"
            placeholder="Password"
          />
        </div>
      </form>
    </div>
  );
}

export default ProviderForm;
