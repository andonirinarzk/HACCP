export default (sequelize, DataTypes) => {
    const Lot = sequelize.define('Lot', {
        LotID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        ReceivedDate: DataTypes.DATE,
        ExpirationDate: DataTypes.DATE,
        QuantityInitial: DataTypes.INTEGER,
        CurrentQuantity: DataTypes.INTEGER
    });
    return Lot;
};
