import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import { sequelize } from './models/index.js';

dotenv.config();

async function createDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.MARIADB_HOSTNAME,
            user: process.env.MARIADB_USERNAME,
            password: process.env.MARIADB_PASSWORD
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.MARIADB_DATABASE}`);
        await connection.end();

        console.log("Synchronizing models with database...");
        await sequelize.sync({ force: true });
        console.log('Models synchronized successfully!');
    } catch (error) {
        console.error('Error during database creation or model synchronization:', error);
    }
}

createDatabase();
