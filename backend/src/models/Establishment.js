export default (sequelize, DataTypes) => {
    const Establishment = sequelize.define('Establishment', {
        EstablishmentID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        Name: DataTypes.STRING,
        Address: DataTypes.STRING,
        Type: DataTypes.STRING,
        GroupID: DataTypes.INTEGER,
    });
    return Establishment;
};