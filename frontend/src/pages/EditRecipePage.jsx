import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditRecipePage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    cuisineType: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`/api/recipes/get/${id}`);
        setFormData(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`/api/recipes/update/${id}`, formData);
      navigate(`/recipes/${id}`);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-gray-100 p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h1 className="text-4xl font-extrabold text-center text-green-600 mb-6">
          Edit Recipe
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="title"
            placeholder="Recipe Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-300 outline-none transition"
          />
          <input
            type="text"
            name="ingredients"
            placeholder="Ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-300 outline-none transition"
          />
          <textarea
            name="instructions"
            placeholder="Instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-300 outline-none transition"
          />
          <input
            type="text"
            name="cuisineType"
            placeholder="Cuisine Type"
            value={formData.cuisineType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-300 outline-none transition"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold shadow hover:bg-green-600 transition"
          >
            Update Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditRecipePage;
