function UserForm({ userData, setUserData }) {
  return (
    <div>
      <form>
        <div className="mb-5">
          <p className="text-xl mb-2">Name</p>
          <input
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            value={userData.name}
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
              setUserData({ ...userData, phone: e.target.value })
            }
            value={userData.phone}
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
              setUserData({ ...userData, email: e.target.value })
            }
            value={userData.email}
            type="text"
            className="border-b-2 border-black w-full bg-transparent outline-none"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-5">
          <p className="text-xl mb-2">Create Password</p>
          <input
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            value={userData.password}
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

export default UserForm;
