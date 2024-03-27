export default (sequelize, DataTypes) => {
    const Meal = sequelize.define('Meal', {
        MealID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        Name: DataTypes.STRING,
        PreparationDate: DataTypes.DATE,
        ChefID: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'User', key: 'UserID' } },
        SampleID: { type: DataTypes.INTEGER, allowNull: true, references: { model: 'MealSample', key: 'SampleID' } }
    });
    return Meal;
};
