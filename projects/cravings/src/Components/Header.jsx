import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center h-[65px] bg-[#c2410c] px-12">
      
      {/* Logo */}
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-[86px] h-[55px] object-contain"
          />
        </Link>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-2">
        <Link
          to="/login"
          className="px-[14px] py-[6px] text-white rounded-[5px] border border-transparent hover:border-white transition-all duration-300"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-3 py-1 bg-white text-[#c2410c] rounded-[5px] border border-transparent hover:bg-[#c2410c] hover:text-white hover:border-white transition-all duration-300"
        >
          Register
        </Link>
      </div>

    </header>
  );
};

export default Header;