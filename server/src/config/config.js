module.exports = {
  port: process.env.PORT || 8081,
  db: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3306,
    database: process.env.DB_NAME || 'Quest',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || ''
  },
  SessionStore: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3306,
    database: process.env.DB_NAME || 'Quest',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || ''
  },
  env: 'development'
}
