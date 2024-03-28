export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        UserID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        Username: DataTypes.STRING,
        FullName: DataTypes.STRING,
        Role: DataTypes.STRING,
        EstablishmentID: DataTypes.INTEGER,
        ChefID: DataTypes.INTEGER,
    });
    return User;
};
