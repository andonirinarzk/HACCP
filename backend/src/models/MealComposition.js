export default (sequelize, DataTypes) => {
    const MealComposition = sequelize.define('MealComposition', {

        QuantityUsed: DataTypes.INTEGER
    });
    return MealComposition;
};
