require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnectNoSql = require('./config/mongo')
const { dbConnectMysql } = require('./config/mysql')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('storage'))

const port = process.env.PORT || 3000 
const ENGINE_DB = process.env.ENGINE_DB
const host = process.env.MYSQL_HOST

app.use('/api', require('./routes'))

app.listen(port, host, () => {
    console.log(`Tu aplicación está escuchando en http://${host}:${port}`)
})

const conexión = () => {
    (ENGINE_DB === 'nosql') ? dbConnectNoSql() : dbConnectMysql()
}

conexión()
