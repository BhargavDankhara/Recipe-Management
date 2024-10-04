import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeList from "../components/RecipeList";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await axios.get("/api/recipes/get");
        setRecipes(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Recipes</h1>
        <Link
          to="/add-recipe"
          className="btn btn-primary btn-lg mb-4 inline-block"
        >
          Add Recipe
        </Link>
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
};

export default HomePage;
