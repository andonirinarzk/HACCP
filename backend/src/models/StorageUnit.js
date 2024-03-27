export default (sequelize, DataTypes) => {
const StorageUnit = sequelize.define('StorageUnit', {
    StorageUnitID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    Type: DataTypes.STRING,
    Location: DataTypes.STRING,
    Capacity: DataTypes.INTEGER
});
return StorageUnit;
};
