import { Request, Response } from 'express';

import { getCategories } from '../service/category.service';

export const getAllCategories = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const responseCategories = await getCategories();
        res.json(responseCategories);
    } catch (error) {
        res.status(400).json(error);
    }
}