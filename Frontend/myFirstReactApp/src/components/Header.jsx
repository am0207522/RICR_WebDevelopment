import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-warning shadow-sm px-4 py-3 d-flex justify-content-between align-items-center">
      <Link to="/" className="text-white fw-bold fs-3 text-decoration-none">
        My Company
      </Link>

      <div className="d-flex gap-4">
        <Link className="text-white fw-semibold" to="/">
          Home
        </Link>
        <Link className="text-white fw-semibold" to="/about">
          About
        </Link>
        <Link className="text-white fw-semibold" to="/product">
          Product
        </Link>
        <Link className="text-white fw-semibold" to="/contact-us">
          Contact Us
        </Link>
      </div>

      <div className="d-flex gap-2">
        <Link to="/login">
          <button className="btn btn-outline-white px-4 bg-body">Login</button>
        </Link>

        <Link to="/register">
          <button className="btn btn-white px-4 bg-body">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
