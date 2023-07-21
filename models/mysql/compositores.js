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

Compositores.findOneData = function (id) {
    return Compositores.findOne({ where: { id }})
}

Compositores.findOneAndUpdate = async function (id, body, estado) {
    const compositor = await this.findByPk(id);

    if (!compositor) {
      return res.status(404).json({ error: 'Compositor no encontrado.' });
    }

    return await compositor.update(body);
}

module.exports = Compositores