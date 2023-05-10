import { Request, Response } from 'express';
import { dbConnection } from '../db/db';
import { QueryResult } from 'pg';
import { error } from 'console';
import { IRecipeByCategory } from '../model/recipe_interface';

export const getRecipes = async () => {
    try {
        const response: QueryResult = await
        dbConnection.query('SELECT * FROM recipe ORDER BY id ASC');
        return response.rows;
    } catch (e) {
        console.log(e);
        throw error('Internal Server error');
    }
};

export const getRecipeByCategory = async () => {
    try {
        const qryString: string = 'SELECT r.*, c.name AS category FROM recipe r INNER JOIN categories c ON r.category_id = c.id ORDER BY r.id ASC';
        const response: QueryResult = await
        dbConnection.query(qryString);
        
        const newRecipient: IRecipeByCategory[] = response.rows.map((rec) => {
            return {
                id: Number(rec.id),
                name: rec.name.toString(),
                steps: rec.steps.split('\n'),
                ingredients: rec.ingredients.split('\n'),
                category: rec.category.toString(),
                image: rec.image.toString()
            }
        });
        
        return newRecipient;
    } catch (e) {
        console.log(e);
        throw error('Internal Server error');
    }
};

export const getRecipeById = async (id: number) => {
    try{
    	
	    const response: QueryResult = await dbConnection.query('SELECT r.*, c.name AS category FROM recipe r INNER JOIN categories c ON r.category_id = c.id WHERE r.id = $1', [id]);
	    const rowQry = response.rows[0];
	   
	    if(!rowQry) return {"status": false,"message":"Receta no encontrada."};
	    
	    return {
                id: Number(rowQry.id),
                name: rowQry.name.toString(),
                steps: rowQry.steps.split('\n'),
                ingredients: rowQry.ingredients.split('\n'),
                category: rowQry.category.toString(),
                image: rowQry.image.toString()
            }
    }catch(e: any){
    	//console.log(e);
    	throw error(e.message)
    }
};
