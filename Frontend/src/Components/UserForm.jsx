import { useState } from "react";

export default function UserForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const handleUser = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      phone,
      email,
      password,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h3 className="font-semibold mb-2 text-lg">1. Enter credentials</h3>
      <form onSubmit={(e) => handleUser(e)}>
        <div className="mb-5">
          <p className="text-xl mb-2">Name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            type="text"
            className="border-b-2 border-black w-full bg-transparent outline-none"
            placeholder="Type your name"
          />
        </div>
        <div className="mb-5">
          <p className="text-xl mb-2">Phone no.</p>
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
            type="text"
            className="border-b-2 border-black w-full bg-transparent outline-none"
            placeholder="Enter Phone no."
          />
        </div>
        <div className="mb-5">
          <p className="text-xl mb-2">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            className="border-b-2 border-black w-full bg-transparent outline-none"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-5">
          <p className="text-xl mb-2">Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            type="password"
            className="border-b-2 border-black w-full bg-transparent outline-none"
            placeholder="Password"
          />
        </div>
        <button className="px-4 py-2 bg-blue-950 text-white rounded-lg mt-5">
          Next
        </button>
      </form>
    </div>
  );
}
