const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const validator = require('express-validator')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);
const config = require ('./config/config')

process.env.NODE_ENV = config.env
console.log('env: ' + process.env.NODE_ENV)

const app = express()
if (process.env.NODE_ENV == 'development') app.use(morgan('hi'))
app.use(session({ secret: 'secret key', saveUninitialized: true, resave: false, store: new MySQLStore(config.SessionStore)}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(validator())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello')
})

const con = require('./models')

con.connect(function(err) {
  if (err) throw err
  else console.log('connected to database')
})

require('./routes')(app)

app.listen(config.port, () => {
  console.log('Server Started at port ' + config.port)
})
