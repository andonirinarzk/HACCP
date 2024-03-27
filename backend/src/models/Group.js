export default (sequelize, DataTypes) => {
    const Group = sequelize.define('Group', {
        GroupID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        Name: DataTypes.STRING,
        Description: DataTypes.STRING
    });
    return Group;
};
