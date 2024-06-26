import dotenv from 'dotenv';
import Sequelize from 'sequelize';
import AuditLogModel from './AuditLog.js';
import EstablishmentModel from './Establishment.js';
import GroupModel from './Group.js';
import LotModel from './Lot.js';
import MealModel from './Meal.js';
import MealCompositionModel from './MealComposition.js';
import MealSampleModel from './MealSample.js';
import ProductModel from './Product.js';
import StorageUnitModel from './StorageUnit.js';
import UserModel from './User.js';

dotenv.config();

const sequelize = new Sequelize(process.env.MARIADB_DATABASE, process.env.MARIADB_USERNAME, process.env.MARIADB_PASSWORD, {
    host: process.env.MARIADB_HOSTNAME,
    dialect: 'mariadb',
});

const Group = GroupModel(sequelize, Sequelize.DataTypes);
const Establishment = EstablishmentModel(sequelize, Sequelize.DataTypes);
const Product = ProductModel(sequelize, Sequelize.DataTypes);
const StorageUnit = StorageUnitModel(sequelize, Sequelize.DataTypes);
const MealSample = MealSampleModel(sequelize, Sequelize.DataTypes);
const MealComposition = MealCompositionModel(sequelize, Sequelize.DataTypes);
const Meal = MealModel(sequelize, Sequelize.DataTypes);
const Lot = LotModel(sequelize, Sequelize.DataTypes);
const AuditLog = AuditLogModel(sequelize, Sequelize.DataTypes);
const User = UserModel(sequelize, Sequelize.DataTypes);

// Initialisez les autres modèles de la même manière

const models = {
    Group,
    Establishment,
    Product,
    StorageUnit,
    Meal,
    MealSample,
    MealComposition,
    Lot,
    User,
    AuditLog,

};

// Exportez l'instance sequelize et tous les modèles
export { sequelize };
export default models;
