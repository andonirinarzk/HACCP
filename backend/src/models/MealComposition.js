export default (sequelize, DataTypes) => {
    const MealComposition = sequelize.define('MealComposition', {
        MealID: DataTypes.INTEGER,
        ProductID: DataTypes.INTEGER,
        QuantityUsed: DataTypes.INTEGER,
    });
    return MealComposition;
};
