export default (sequelize, DataTypes) => {
    const InventoryTransaction = sequelize.define('InventoryTransaction', {
        TransactionID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        LotID: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'Lot', key: 'LotID' } },
        EstablishmentID: { type: DataTypes.INTEGER, references: { model: 'Establishment', key: 'EstablishmentID' } },
        Type: DataTypes.STRING,
        Quantity: DataTypes.INTEGER,
        TransactionDate: DataTypes.DATE,
        AssociatedMealID: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'Meal', key: 'MealID' } }
    });
    return InventoryTransaction;
};
