import { Link } from "react-router-dom";

const PromotionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-bold mb-4">
        Welcome to Recipe App
      </h1>
      <p className="text-white text-lg mb-8">
        Discover and share amazing recipes
      </p>
      <Link
        to="/signup"
        className="bg-white text-blue-500 px-6 py-2 rounded-full font-bold"
      >
        Get Started
      </Link>
    </div>
  );
};

export default PromotionPage;
