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
            type: DataTypes.ENUM(['user', "admin"]),
            defaultValue: 'user'
        }
    },
    {
        timestamps: true     
    }
)

User.findOneAndUpdate = async function (id, body, estado) {
    const user = await this.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    return await user.update(body);
}

module.exports = User