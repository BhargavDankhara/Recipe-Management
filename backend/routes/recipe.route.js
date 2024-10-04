import express from "express";
import {
  createRecipe,
  deleteRecipe,
  getRecipeById,
  getRecipes,
  updateRecipe,
} from "../controllers/recipe.controller.js";

const router = express.Router();

router.post("/create", createRecipe);
router.get("/get", getRecipes);
router.get("/get/:id", getRecipeById);
router.patch("/update/:id", updateRecipe);
router.delete("/delete/:id", deleteRecipe);

export default router;
