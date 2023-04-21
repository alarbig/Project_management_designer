const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Organization extends Model {}

Organization.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        businessName: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true, 
            references: {
                model: 'user',
                key: 'id'
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        teamSize: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        industry: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        // team_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true, 
        //     references: {
        //         model: 'team',
        //         key: 'id'
        //     }
        // }

    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'organization'
    });
    

module.exports = Organization;


