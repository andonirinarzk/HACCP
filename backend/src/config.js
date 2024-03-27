import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const sequelize = new Sequelize(process.env.MARIADB_DATABASE, process.env.MARIADB_USERNAME, process.env.MARIADB_PASSWORD, {
    host: process.env.MARIADB_HOSTNAME,
    dialect: 'mariadb'
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}