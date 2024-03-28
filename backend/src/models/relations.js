const setupRelations = (models) => {
    // User et Establishment
    models.User.belongsTo(models.Establishment, { foreignKey: 'EstablishmentID' });
    models.Establishment.hasMany(models.User, { foreignKey: 'EstablishmentID' });

    // Lot et Product
    models.Lot.belongsTo(models.Product, { foreignKey: 'ProductID' });
    models.Product.hasMany(models.Lot, { foreignKey: 'ProductID' });

    // InventoryTransaction, Lot et Establishment
    models.InventoryTransaction.belongsTo(models.Lot, { foreignKey: 'LotID' });
    models.Lot.hasMany(models.InventoryTransaction, { foreignKey: 'LotID' });
    models.InventoryTransaction.belongsTo(models.Establishment, { foreignKey: 'EstablishmentID' });
    models.Establishment.hasMany(models.InventoryTransaction, { foreignKey: 'EstablishmentID' });

    // Meal, User et MealSample
    models.Meal.belongsTo(models.User, { foreignKey: 'ChefID' });
    models.User.hasMany(models.Meal, { foreignKey: 'ChefID' });
    models.Meal.hasOne(models.MealSample, { foreignKey: 'SampleID' });
    models.MealSample.belongsTo(models.Meal, { foreignKey: 'MealID' });

    // MealComposition, Meal et Product
    models.MealComposition.belongsTo(models.Meal, { foreignKey: 'MealID' });
    models.Meal.hasMany(models.MealComposition, { foreignKey: 'MealID' });
    models.MealComposition.belongsTo(models.Product, { foreignKey: 'ProductID' });
    models.Product.hasMany(models.MealComposition, { foreignKey: 'ProductID' });

    // Establishment et Group
    models.Establishment.belongsTo(models.Group, { foreignKey: 'GroupID' });
    models.Group.hasMany(models.Establishment, { foreignKey: 'GroupID' });

    // StorageUnit et Establishment
    models.StorageUnit.belongsTo(models.Establishment, { foreignKey: 'EstablishmentID' });
    models.Establishment.hasMany(models.StorageUnit, { foreignKey: 'EstablishmentID' });

    // AuditLog et User
    models.AuditLog.belongsTo(models.User, { foreignKey: 'UserID' });
    models.User.hasMany(models.AuditLog, { foreignKey: 'UserID' });
};

export default setupRelations;
