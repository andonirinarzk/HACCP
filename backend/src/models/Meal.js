
export default (sequelize, DataTypes) => {
    const Meal = sequelize.define('Meal', {
        MealID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        Name: DataTypes.STRING,
        PreparationDate: DataTypes.DATE,
        ChefID: DataTypes.INTEGER,
        SampleID: DataTypes.INTEGER,

    });
    return Meal;
};
