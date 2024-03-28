import dotenv from 'dotenv';
import Sequelize from 'sequelize';
import setupRelations from './relations.js'; // Importez setupRelations

dotenv.config();

const sequelize = new Sequelize(process.env.MARIADB_DATABASE, process.env.MARIADB_USERNAME, process.env.MARIADB_PASSWORD, {
    host: process.env.MARIADB_HOSTNAME,
    dialect: 'mariadb',
});

// importer des modèles
import AuditLogModel from './AuditLog.js';
import EstablishmentModel from './Establishment.js';
import GroupModel from './Group.js';
import InventoryTransactionModel from './InventoryTransaction.js';
import LotModel from './Lot.js';
import MealModel from './Meal.js';
import MealCompositionModel from './MealComposition.js';
import MealSampleModel from './MealSample.js';
import ProductModel from './Product.js';
import StorageUnitModel from './StorageUnit.js';
import UserModel from './User.js';

// initialiser les modèles
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
const InventoryTransaction = InventoryTransactionModel(sequelize, Sequelize.DataTypes);



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
    InventoryTransaction,
};

// Initialiser les relations entre les modèles
setupRelations(models);

// Exportez l'instance sequelize et tous les modèles
export { sequelize };
export default models;
