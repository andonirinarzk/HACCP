
export default (sequelize, DataTypes) => {
const StorageUnit = sequelize.define('StorageUnit', {
    StorageUnitID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    EstablishmentID: DataTypes.INTEGER,
    Type: DataTypes.STRING,
    Location: DataTypes.STRING,
    Capacity: DataTypes.INTEGER
});
return StorageUnit;
};
