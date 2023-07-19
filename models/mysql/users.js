const { sequelize } = require('../../config/mysql')
const { DataTypes } = require('sequelize')

const User = sequelize.define(
    'users',
    {
        id: {
            type: DataTypes.NUMBER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.ENUM(['user', 'admin']),
            defaultValue: 'admin'
        }
    },
    {
        timestamps: true     
    }
)

module.exports = User