const { sequelize } = require('../../config/mysql')
const { DataTypes } = require('sequelize')
const Storage = require('./storage')
const Compositores = require('./compositores')
const Periodos = require('./periodos')

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

Partituras.belongsTo(Compositores, {
    foreignKey: 'compositor_id',
    as: 'compositor',
})
Partituras.belongsTo(Periodos, {
    foreignKey: 'periodo_id',
    as: 'periodo',
})
Partituras.belongsTo(Storage, {
    foreignKey: 'storage_id',
    as: 'archivo',
})

Partituras.findAllData = function () {
    return Partituras.findAll({ include: ['compositor', 'periodo', 'archivo'] })
}

Partituras.findOneData = function (id) {
    return Partituras.findOne({ where: { id }, include: ['compositor', 'periodo', 'archivo'] })
}

Partituras.findOneAndUpdate = async function (id, body) {
    const partitura = await this.findByPk(id)

    if (!partitura) {
        return res.status(404).json({ error: 'Partitura no encontrada.' })
    }

    return await partitura.update(body)
}

module.exports = Partituras