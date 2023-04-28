import { Request, Response } from 'express';

import {getRecipes} from '../service/api_openai';

export const postOpenIARecipe = async (req: Request, res: Response) => {
    const { body } = req;
    const { recipeQry } = body;
    try {
                
        const responseOpenIA = await getRecipes(recipeQry);
        res.json(responseOpenIA);
        
    } catch (error) {
        res.status(400).json(error);
    }
}

