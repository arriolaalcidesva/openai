import { Router } from 'express';

import { getAllRecipes, getRecipesByCategories } from '../controller/recipe.controller';

const recipeRouter = Router();

recipeRouter.get('/',  getAllRecipes);
recipeRouter.get('/getrecipesbycategories',  getRecipesByCategories);

  export default recipeRouter;