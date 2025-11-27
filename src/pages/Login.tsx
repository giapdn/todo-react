import { useState } from "react";
// import api from "../api/axios";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // async function handleLogin(e) {
  //   e.preventDefault();
  //   try {
  //     const res = api.post("/api/auth/login", { username, password });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-center text-2xl">みずき</h1>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username..."
            className="pl-2 border w-full py-2 rounded-sm"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
            className="pl-2 border w-full py-2 rounded-sm"
          />
        </div>
        <button
          // onClick={}
          className="cursor-pointer mt-3 bg-green-400 p-1.5 rounded-sm"
        >
          Login
        </button>
      </div>
    </div>
  );
}
