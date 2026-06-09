import React, { useState } from "react";
import { Link } from "react-router-dom";
// import foodTable from "../assets/foodTable.webp";

const Register = () => {
  const [role, setRole] = useState("customer");

  return (
    <div
      className="h-[90vh] bg-[url('public/foodTable.webp')] flex items-center justify-end bg-cover bg-center p-10 md:pe-30"
      // style={{ backgroundImage: `url(${foodTable})` }}
    >
      <div className="bg-white rounded-xl shadow-md px-10 py-6 max-w-md w-full">
        <h2 className="text-center text-3xl font-bold text-[#c0392b] mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Join us as a Customer, Restaurant, or Rider
        </p>

        <form>
          <div className="mb-4">
            <span className="block mb-2 font-medium text-gray-700">
              Register as:
            </span>
            <div className="flex flex-wrap gap-4">
              {["customer", "restaurant", "rider"].map((r) => (
                <label
                  key={r}
                  className="flex items-center gap-1 cursor-pointer text-gray-700"
                >
                  <input
                    type="radio"
                    name="role"
                    value={r}
                    checked={role === r}
                    onChange={() => setRole(r)}
                    className="accent-[#c0392b]"
                  />
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-4">
            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#c0392b]"
            />
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#c0392b]"
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#c0392b]"
            />
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#c0392b]"
            />
            <input
              type="password"
              placeholder="Confirm your password"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#c0392b]"
            />
          </div>

          <div className="mb-4 flex items-center gap-2">
            <input type="checkbox" className="accent-[#c0392b]" />
            <span className="text-gray-700 text-sm">
              I agree to the terms and conditions.
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#c0392b] text-white py-2 rounded font-semibold hover:bg-[#a93226] transition-colors"
          >
            Register
          </button>

          <div className="flex justify-center gap-1 mt-3 text-sm">
            <p className="mb-0 text-gray-600">Already registered?</p>
            <Link
              to="/login"
              className="text-[#c0392b] font-semibold"
              style={{ textDecoration: "none" }}
            >
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
