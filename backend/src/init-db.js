import mysql from 'mysql2/promise';
import { sequelize } from './models/index.js';

async function createDatabase() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.MARIADB_HOSTNAME,
            user: process.env.MARIADB_USERNAME,
            password: process.env.MARIADB_PASSWORD
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.MARIADB_DATABASE}`);
        await connection.end();

        console.log("Base de données créée ou déjà existante");

        await sequelize.sync({ force: false });
        console.log('Models synchronized successfully!');
    } catch (error) {
        console.error('Error during database creation or model synchronization:', error);
    }
}

createDatabase();
