export default (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        ProductID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        Name: DataTypes.STRING,
        Description: DataTypes.STRING,
        Barcode: DataTypes.STRING,
        Category: DataTypes.STRING,
        Price: DataTypes.DECIMAL,
        Nutrition: DataTypes.JSON,
        Storage: DataTypes.JSON,
        Allergen: DataTypes.JSON,
        UrlImage: DataTypes.STRING,
    });
    return Product;
};
