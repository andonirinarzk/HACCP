export default (sequelize, DataTypes) => {
    const AuditLog = sequelize.define('AuditLog', {
        ActionType: DataTypes.STRING,
        Description: DataTypes.STRING,
        Timestamp: DataTypes.DATE,
        AffectedTable: DataTypes.STRING,
        RecordID: DataTypes.INTEGER,
        UserID: DataTypes.INTEGER,
    });
    return AuditLog;
};