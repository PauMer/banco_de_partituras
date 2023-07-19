const { sequelize } = require('../../config/mysql')
const { DataTypes } = require('sequelize')
const Storage = require("./storage");

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
            type: DataTypes.INTEGER
        },
        periodo_id: {
            type: DataTypes.INTEGER
        },
        instrumento: {
            type: DataTypes.STRING
        },
        storage_id: {
            type: DataTypes.INTEGER
        }
        },
    {
        timestamps: true     
    }
)

Partituras.findAllData = function () {
    Tracks.belongsTo(Storage, {
      foreignKey: "media_id",
      as: "archivo",
    });
    return Tracks.findAll({ include: "archivo" });
};

Partituras.findOneData = function (id) {
    Tracks.belongsTo(Storage, {
      foreignKey: "media_id",
      as: "archivo",
    });
    return Tracks.findOne({ where: { id }, include: "archivo" });
};

module.exports = Partituras