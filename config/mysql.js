const { Sequelize } = require('sequelize')

const database = process.env.MYSQL_DATABASE
const user = process.env.MYSQL_USER
const password = process.env.MYSQL_PASSWORD
const host = process.env.MYSQL_HOST

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'mysql'
})

const dbConnectMysql = async () => {
  try {
    await sequelize.authenticate()
    console.log('Conexión a MySQL establecida correctamente')
  } catch (e) {
    console.log('Error de conexión a MySQL:', e)
  }
}

module.exports = { dbConnectMysql, sequelize }