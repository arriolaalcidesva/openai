import { db_host, db_port, db_name, db_user, db_password } from '../config/config'
import { Pool } from 'pg';

export const dbConnection = new Pool({
    user: db_user,
    host: db_host,
    password: db_password,
    database: db_name,
    port: db_port
});