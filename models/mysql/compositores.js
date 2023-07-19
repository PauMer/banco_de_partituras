const { sequelize } = require('../../config/mysql')
const { DataTypes } = require('sequelize')

const Compositores = sequelize.define(
    'compositores',
    {
        id: {
            type: DataTypes.NUMBER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: true     
    }
)

module.exports = Compositores