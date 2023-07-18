const { sequelize } = require('../../config/mysql')
const { DataTypes } = require('sequelize')

const Storage = sequelize.define(
    'storages',
    {
        id: {
            type: DataTypes.NUMBER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filename: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: true     
    }
)

module.exports = Storage