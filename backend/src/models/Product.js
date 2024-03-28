export default (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        ProductID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        Name: DataTypes.STRING,
        Description: DataTypes.STRING,
        Supplier: DataTypes.STRING,
        Barcode: DataTypes.STRING
    });
    return Product;
};
