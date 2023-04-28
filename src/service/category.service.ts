import { Request, Response } from 'express';
import { dbConnection } from '../db/db';
import { QueryResult } from 'pg';
import { error } from 'console';

export const getCategories = async () => {
    try {
        const response: QueryResult = await
        dbConnection.query('SELECT * FROM categories ORDER BY id ASC');
        return response.rows;
    } catch (e) {
        console.log(e);
        throw error('Internal Server error');
    }
};