const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Project extends Model {}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        project_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'organization',
                key: 'id'
            }
        },
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }, 
    createdBy: {
        type: DataTypes.STRING,
        allowNull: false
    },
    updatedBy: {
        type: DataTypes.STRING,
        allowNull: false
    },
    deletedBy: {
        type: DataTypes.STRING,
        allowNull: true
    },
    sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'project'

}, 
    
{
    // Other model options go here
});

module.exports = Project;
