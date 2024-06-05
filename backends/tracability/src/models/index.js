const sequelize = require('../config/database');
const User = require('./user');
const Product = require('./product');
const Lot = require('./lot');
const InventoryTransaction = require('./inventoryTransaction');
const Meal = require('./meal');
const MealComposition = require('./mealComposition');
const MealSample = require('./mealSample');
const Establishment = require('./establishment');
const Group = require('./group');
const StorageUnit = require('./storageUnit');
const AuditLog = require('./auditLog');

// Define associations
User.belongsTo(Establishment, { foreignKey: 'EstablishmentID' });
Product.hasMany(Lot, { foreignKey: 'ProductID' });
Lot.belongsTo(Product, { foreignKey: 'ProductID' });
InventoryTransaction.belongsTo(Lot, { foreignKey: 'LotID' });
InventoryTransaction.belongsTo(Establishment, { foreignKey: 'EstablishmentID' });
InventoryTransaction.belongsTo(Meal, { foreignKey: 'AssociatedMealID' });
Meal.belongsTo(User, { foreignKey: 'ChefID' });
Meal.belongsTo(MealSample, { foreignKey: 'SampleID' });
MealComposition.belongsTo(Meal, { foreignKey: 'MealID' });
MealComposition.belongsTo(Product, { foreignKey: 'ProductID' });
MealSample.belongsTo(Meal, { foreignKey: 'MealID' });
Establishment.belongsTo(Group, { foreignKey: 'GroupID' });
StorageUnit.belongsTo(Establishment, { foreignKey: 'EstablishmentID' });
AuditLog.belongsTo(User, { foreignKey: 'UserID' });

const initDb = async () => {
  await sequelize.sync({ force: true });
  console.log('Database synchronized');
};

module.exports = {
  User,
  Product,
  Lot,
  InventoryTransaction,
  Meal,
  MealComposition,
  MealSample,
  Establishment,
  Group,
  StorageUnit,
  AuditLog,
  initDb,
};
