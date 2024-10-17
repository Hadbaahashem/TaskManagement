import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div className="p-4 bg-gray-800 w-2/6 rounded">
        <div className="text-2xl font-semibold">Signup</div>
        <input
          type="username"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          placeholder="username"
          name="username"
        />
        <input
          type="email"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          placeholder="email"
          name="xyz@example.com"
        />
        <input
          type="password"
          className="bg-gray-700 px-3 py-2 my-3 w-full rounded"
          placeholder="password"
          name="password"
        />
        <div className="w-full flex items-center justify-between">
          <button className="bg-blue-400 text-xl font-semibold text-white px-3 py-2 rounded">
            SignUp
          </button>
          <Link to="/login" className="text-gray-400 ">
            Not having an account?{" "}
            <span className="hover:text-gray-200">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
