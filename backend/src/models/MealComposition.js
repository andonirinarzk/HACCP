export default (sequelize, DataTypes) => {
    const MealComposition = sequelize.define('MealComposition', {
        MealID: { type: DataTypes.INTEGER, references: { model: 'Meal', key: 'MealID' } },
        ProductID: { type: DataTypes.INTEGER, references: { model: 'Product', key: 'ProductID' } },
        QuantityUsed: DataTypes.INTEGER
    });
    return MealComposition;
};
