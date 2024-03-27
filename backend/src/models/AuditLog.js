export default (sequelize, DataTypes) => {
    const AuditLog = sequelize.define('AuditLog', {
        LogID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        UserID: { type: DataTypes.INTEGER, references: { model: 'User', key: 'UserID' } },
        ActionType: DataTypes.STRING,
        Description: DataTypes.STRING,
        Timestamp: DataTypes.DATE,
        AffectedTable: DataTypes.STRING,
        RecordID: DataTypes.INTEGER
    });
    return AuditLog;
};