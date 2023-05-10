import { Router } from 'express';

import { getAllRecipes, getRecipesByCategories, getRecipesById } from '../controller/recipe.controller';

const recipeRouter = Router();

recipeRouter.get('/',  getAllRecipes);
recipeRouter.get('/getrecipesbycategories',  getRecipesByCategories);
recipeRouter.get('/getrecipebyid/:id',  getRecipesById);

  export default recipeRouter;