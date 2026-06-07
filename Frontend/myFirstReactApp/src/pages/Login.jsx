// import { useState } from "react";

// function Login() {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("userName :", userName);
//     console.log("password :", password);
//   };
//   return (
//     <>
//       <div className="d-flex justify-content-center">
//         <div className="border p-3 w-50 mt-5bg-light shadow rounded">
//           <h1 className="text-center">Welcome Back!!!</h1>
//           <br />
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="userName">Username</label>
//             <input
//               type="text"
//               name="userName"
//               className="form-control"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//             />
//             <br />
//             <label htmlFor="password">Password</label>
//             <input
//               type="text"
//               name="password"
//               className="form-control"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <br />
//             <div className="float-end">
//               <button type="submit" className="btn btn-primary">
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email :", email);
    console.log("Password :", password);
    console.log("Remember :", remember);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "720px" }}>
        <div className="forms">
          <h2 className="text-center mb-3" id="wb">
            Welcome Back
          </h2>

          <p className="text-center">Login to your Cravings account.</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 w-100">
              <label htmlFor="email" className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control custom-input"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>

              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control custom-input pe-5"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-eye-fill position-absolute top-50 end-0 translate-middle-y me-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                </svg>
              </div>
            </div>

            <div className="mb-3 d-flex justify-content-between">
              <div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />

                <label htmlFor="checkbox" className="form-label ms-2">
                  Remember me
                </label>
              </div>

              <div>
                <Link
                  to="/forgot-password"
                  className="text-decoration-none"
                  id="clr"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button className="btn btn-primary">Login</button>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <hr className="w-25" />
              <p className="text-center mt-3 px-2">Don't have an account?</p>
              <hr className="w-25" />
            </div>

            <Link
              to="/register"
              className="regi fw-medium d-flex justify-content-center text-decoration-none"
            >
              Create an account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
