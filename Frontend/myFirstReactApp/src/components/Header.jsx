import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-primary-subtle shadow-sm px-4 py-3 d-flex justify-content-between align-items-center">
      
      <div className="text-primary fw-bold fs-3">
        My Company
      </div>

      <div className="d-flex gap-4">
        <Link className="text-primary fw-semibold" to="/">
          Home
        </Link>
        <Link className="text-primary fw-semibold" to="/about">
          About
        </Link>
        <Link className="text-primary fw-semibold" to="/product">
          Product
        </Link>
        <Link className="text-primary fw-semibold" to="/contact-us">
          Contact Us
        </Link>
      </div>

      <div className="d-flex gap-2">
        <Link to="/login">
          <button className="btn btn-outline-primary px-4">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="btn btn-primary px-4">
            Register
          </button>
        </Link>
      </div>

    </div>
  );
}

export default Header;