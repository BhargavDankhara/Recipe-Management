import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Recipe App
        </Link>
        <div>
          <Link to="/signup" className="text-white mx-2">
            Sign Up
          </Link>
          <Link to="/login" className="text-white mx-2">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
