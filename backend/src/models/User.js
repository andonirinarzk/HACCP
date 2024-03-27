export default (sequelize, DataTypes) => {
const User = sequelize.define('User', {
    UserID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Username: DataTypes.STRING,
    FullName: DataTypes.STRING,
    Role: DataTypes.STRING,
    EstablishmentID: { type: DataTypes.INTEGER, references: { model: 'Establishment', key: 'EstablishmentID' } }
});
return User;
};
