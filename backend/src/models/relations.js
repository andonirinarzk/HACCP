// Importez vos modèles ici
import AuditLog from './AuditLog';
import Establishment from './Establishment';
import Group from './Group';
import InventoryTransaction from './InventoryTransaction';
import Lot from './Lot';
import Meal from './Meal';
import MealComposition from './MealComposition';
import MealSample from './MealSample';
import Product from './Product';
import StorageUnit from './StorageUnit';
import User from './User';

const setupRelations = () => {
  // User et Establishment
  User.belongsTo(Establishment, { foreignKey: 'EstablishmentID' });
  Establishment.hasMany(User, { foreignKey: 'EstablishmentID' });

  // Lot et Product
  Lot.belongsTo(Product, { foreignKey: 'ProductID' });
  Product.hasMany(Lot, { foreignKey: 'ProductID' });

  // InventoryTransaction, Lot et Establishment
  InventoryTransaction.belongsTo(Lot, { foreignKey: 'LotID' });
  Lot.hasMany(InventoryTransaction, { foreignKey: 'LotID' });
  InventoryTransaction.belongsTo(Establishment, { foreignKey: 'EstablishmentID' });
  Establishment.hasMany(InventoryTransaction, { foreignKey: 'EstablishmentID' });

  // Meal, User et MealSample
  Meal.belongsTo(User, { foreignKey: 'ChefID' });
  User.hasMany(Meal, { foreignKey: 'ChefID' });
  Meal.hasOne(MealSample, { foreignKey: 'SampleID' });
  MealSample.belongsTo(Meal, { foreignKey: 'MealID' });

  // MealComposition, Meal et Product
  MealComposition.belongsTo(Meal, { foreignKey: 'MealID' });
  Meal.hasMany(MealComposition, { foreignKey: 'MealID' });
  MealComposition.belongsTo(Product, { foreignKey: 'ProductID' });
  Product.hasMany(MealComposition, { foreignKey: 'ProductID' });

  // Establishment et Group
  Establishment.belongsTo(Group, { foreignKey: 'GroupID' });
  Group.hasMany(Establishment, { foreignKey: 'GroupID' });

  // StorageUnit et Establishment
  StorageUnit.belongsTo(Establishment, { foreignKey: 'EstablishmentID' });
  Establishment.hasMany(StorageUnit, { foreignKey: 'EstablishmentID' });

  // AuditLog et User
  AuditLog.belongsTo(User, { foreignKey: 'UserID' });
  User.hasMany(AuditLog, { foreignKey: 'UserID' });
};

export default setupRelations;
