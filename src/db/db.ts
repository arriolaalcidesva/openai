import dotenv from 'dotenv';
import { Pool } from 'pg';
// ENV
dotenv.config();

export const dbConnection = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT)
});