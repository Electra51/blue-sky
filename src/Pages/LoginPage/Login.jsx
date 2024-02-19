import React, { useState } from "react";

const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleSignIn = async (e) => {
    e.preventDefault();

    const data = {
      email: value.email,
      password: value.password,
    };

    console.log("data", data);
  };

  return (
    <div>
      <div className="w-full max-w-xs mx-auto mt-32">
        <form
          className="bg-white shadow-sm rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSignIn}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              value={value.email}
              onChange={(e) => {
                setValue((prev) => ({ ...prev, email: e.target.value }));
              }}
              placeholder="email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={value.password}
              onChange={(e) => {
                setValue((prev) => ({ ...prev, password: e.target.value }));
              }}
              placeholder="******************"
            />
            {/* <p className="text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-[#76C4EB] hover:bg-[#76C4EB] text-white text-[14px] font-medium py-1 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
