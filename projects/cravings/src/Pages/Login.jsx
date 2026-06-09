import { useState } from "react";
// import foodTable from "../assets/foodTable.webp";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative h-[90vh] bg-[url('public/foodTable.webp')]  w-full">

      {/* Login Form */}
      <div className="absolute top-[15%] left-[8%] w-[90%] max-w-[445px] bg-white p-7 rounded-md shadow-lg">
        <h2 className="text-center text-[#c2410c] font-bold text-4xl mb-3">
          Welcome Back
        </h2>

        <p className="text-center mb-5">
          Login to your Cravings account.
        </p>

        <form>
          {/* Email */}
          <div className="mb-4">
            <label className="block mb-2">Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-[#c2410c]"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-2">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 outline-none focus:border-[#c2410c]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                👁
              </button>
            </div>
          </div>

          {/* Remember */}
          <div className="flex justify-between mb-5">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>

            <a
              href="#"
              className="text-[#c2410c] hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#c2410c] text-white py-2.5 rounded-md"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <hr className="flex-1" />
            <span>Don't have an account?</span>
            <hr className="flex-1" />
          </div>

          <a
            href="/register"
            className="block text-center text-[#c2410c] font-medium hover:underline"
          >
            Create an account
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;