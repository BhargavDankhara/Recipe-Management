import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`/api/recipes/get/${id}`);
        setRecipe(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/recipes/delete/${id}`);
      navigate("/homepage");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="max-w-2xl mx-auto bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-4">{recipe.ingredients}</p>
        <p className="text-gray-600 mb-4">{recipe.cuisineType}</p>
        <p className="mb-4">{recipe.instructions}</p>
        <div className="flex space-x-2">
          <button
            onClick={() => navigate(`/edit-recipe/${id}`)}
            className="btn btn-primary btn-outline btn-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white transform hover:scale-105 rounded-md px-2"
          >
            <i className="fas fa-edit mr-2"></i> Edit
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-error btn-outline btn-lg transition duration-300 ease-in-out hover:bg-red-500 hover:text-white transform hover:scale-105 rounded-md px-2"
          >
            <i className="fas fa-trash mr-2"></i> Delete
          </button>
          <button
            className="btn btn-secondary btn-outline btn-lg transition duration-300 ease-in-out hover:bg-gray-500 hover:text-white transform hover:scale-105 rounded-md px-2"
            onClick={() => navigate("/homepage")}
          >
            <i className="fas fa-arrow-left mr-2"></i> Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
