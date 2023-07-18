const { sequelize } = require('../../config/mysql')
const { DataTypes } = require('sequelize')

const Partituras = sequelize.define(
    'partituras',
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
        compositor_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'compositores', // Nombre del modelo de la tabla a la que hace referencia
              key: 'id' // Nombre de la columna de la tabla a la que hace referencia
        }},
        periodo_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'periodos', // Nombre del modelo de la tabla a la que hace referencia
              key: 'id' // Nombre de la columna de la tabla a la que hace referencia
        }},
        instrumento: {
            type: DataTypes.STRING
        },
        storage_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'storages', // Nombre del modelo de la tabla a la que hace referencia
              key: 'id' // Nombre de la columna de la tabla a la que hace referencia
         }}
        },
    {
        timestamps: true     
    }
)

module.exports = Partituras