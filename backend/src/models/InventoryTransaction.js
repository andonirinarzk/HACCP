export default (sequelize, DataTypes) => {
    const InventoryTransaction = sequelize.define('InventoryTransaction', {
        TransactionID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        Type: DataTypes.STRING,
        Quantity: DataTypes.INTEGER,
        TransactionDate: DataTypes.DATE,
        LotID: DataTypes.INTEGER,
        EstablishmentID: DataTypes.INTEGER,

    });
    return InventoryTransaction;
};
