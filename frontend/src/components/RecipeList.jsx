import { Link } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  // Debugging: Log the recipes array to the console
  console.log("Recipes:", recipes);

  // Check if recipes is an array and has elements
  if (!Array.isArray(recipes) || recipes.length === 0) {
    return <div>No recipes found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <div key={recipe._id} className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
          <p className="text-gray-600 mb-2">{recipe.cuisineType}</p>
          <Link to={`/recipes/${recipe._id}`} className="text-blue-500">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
