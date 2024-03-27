export default (sequelize, DataTypes) => {
const StorageUnit = sequelize.define('StorageUnit', {
    StorageUnitID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    EstablishmentID: { type: DataTypes.INTEGER, references: { model: 'Establishment', key: 'EstablishmentID' } },
    Type: DataTypes.STRING,
    Location: DataTypes.STRING,
    Capacity: DataTypes.INTEGER
});
return StorageUnit;
};
