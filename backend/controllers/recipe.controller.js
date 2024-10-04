import { Recipe } from "../models/recipe.model.js";

export async function createRecipe(req, res) {
  const { title, ingredients, instructions, cuisineType } = req.body;

  try {
    const newRecipe = new Recipe({
      title,
      ingredients,
      instructions,
      cuisineType,
    });

    await newRecipe.save();
    res.json(newRecipe);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
}

export async function getRecipes(req, res) {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
}

export async function getRecipeById(req, res) {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.json(recipe);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.status(500).send("Server error");
  }
}

export async function updateRecipe(req, res) {
  const { title, ingredients, instructions, cuisineType } = req.body;

  try {
    let recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }

    recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      { title, ingredients, instructions, cuisineType },
      { new: true }
    );

    res.json(recipe);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.status(500).send("Server error");
  }
}

export async function deleteRecipe(req, res) {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ msg: "Recipe not found" });
    }

    await recipe.deleteOne();
    res.json({ msg: "Recipe removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Recipe not found" });
    }
    res.status(500).send("Server error");
  }
}
