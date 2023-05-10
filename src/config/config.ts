import * as dotenv from 'dotenv';
dotenv.config();

export const port = Number(process.env.PORT);
export const db_host = String(process.env.DB_HOST);
export const db_port = Number(process.env.DB_PORT);
export const db_name = String(process.env.DB_NAME);
export const db_user = String(process.env.DB_USER);
export const db_password = String(process.env.DB_PASSWORD);
export const uri_openai = String(process.env.URL_OPEN_IA);
export const token = String(process.env.TOKEN);
export const secret = String(process.env.SECRET);
export const jwt_token = String(process.env.JWT_TOKEN);