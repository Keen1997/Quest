const mysql = require('mysql')
const config = require('../config/config')

const con = mysql.createConnection({
  host: config.db.host,
  port: config.db.port,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password
})

module.exports = con
