module.exports = (sequelize, DataTypes) => {
    const Hire = sequelize.define('Hire', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: 'hires', // Ensure this matches your actual table name
        timestamps: false  // Set to true if your table includes createdAt and updatedAt columns
    });

    return Hire;
};
