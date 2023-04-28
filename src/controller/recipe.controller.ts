import { Request, Response } from 'express';

import { getRecipes, getRecipeByCategory } from '../service/recipe.service';

export const getAllRecipes = async (req: Request, res: Response) => {
    const { body } = req;
    
    try {
        const responseRecipes = await getRecipes();
        res.json(responseRecipes);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const getRecipesByCategories = async(req: Request, res: Response) => {
    const { body } = req;
    try {
        const responseRecipesByCategories = await getRecipeByCategory();
        res.json(responseRecipesByCategories);
    } catch (error) {
        res.status(400).json(error);
    }
}