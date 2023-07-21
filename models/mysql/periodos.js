const { sequelize } = require('../../config/mysql')
const { DataTypes } = require('sequelize')

const Periodos = sequelize.define(
    'periodos',
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

Periodos.findOneAndUpdate = async function (id, body, estado) {
    const periodo = await this.findByPk(id);

    if (!periodo) {
      return res.status(404).json({ error: 'Periodo no encontrado.' });
    }

    return await periodo.update(body);
}

module.exports = Periodos