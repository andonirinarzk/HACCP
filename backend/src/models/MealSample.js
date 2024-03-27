export default (sequelize, DataTypes) => {
const MealSample = sequelize.define('MealSample', {
    SampleID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    MealID: { type: DataTypes.INTEGER, references: { model: 'Meal', key: 'MealID' } },
    StoredDate: DataTypes.DATE,
    StoredUntil: DataTypes.DATE,
    StorageCondition: DataTypes.STRING,
    SampleQuantity: DataTypes.INTEGER
});
return MealSample;
};
