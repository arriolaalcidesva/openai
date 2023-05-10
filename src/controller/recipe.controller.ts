import { Request, Response } from 'express';

import { getRecipes, getRecipeByCategory, getRecipeById } from '../service/recipe.service';

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

export const getRecipesById = async(req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const responseGetRecipeById = await getRecipeById(id);
        
        res.json(responseGetRecipeById);
    } catch (error) {
        res.status(400).json(error);
    }
}