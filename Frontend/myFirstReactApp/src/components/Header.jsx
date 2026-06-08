function Header() {
  return (
    <>
      <header
        className="d-flex justify-content-between align-items-center px-5 py-3"
        style={{ backgroundColor: "#f35e39" }}
      >
        {/* Logo */}
        <div>
          <img
            src="src/assets/hero.png"
            alt="Logo"
            style={{ height: "20px" }}
          />
        </div>

        {/* Right Side Buttons */}
        <div className="d-flex align-items-center gap-4">
          <a
            href="/login"
            className="text-white text-decoration-none fw-medium"
          >
            Login
          </a>

          <a
            href="/register"
            className="btn btn-light px-4 py-2"
            style={{
              color: "#C64626",
              borderRadius: "6px",
              fontWeight: "500",
            }}
          >
            Register
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;