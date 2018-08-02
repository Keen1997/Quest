const mysql = require('mysql')
const bcrypt = require('bcrypt')
const moment = require('moment')
const con = require('../models')

have_data = (res, data, column) => {
  sql = 'SELECT user_id FROM users WHERE '+ column +' = ' + '"' + data + '"'
  con.query(sql, function (err, result) {
    if (result.length!=0) res.end('have')
    else res.end('no have')
  })
}

module.exports = {

  have_ID (req, res) {
    have_data(res, req.body.ID, 'user_id')
  },

  have_email (req, res) {
    have_data(res, req.body.email, 'user_email')
  },

  async signup(req, res) {

    let format_signup = false

    await req.checkBody('ID', 'ID length must between 6-12 characters').isLength({min:6, max:12})
    await req.checkBody('ID', 'ID is only alphanumaric').isAlphanumeric()
    await req.checkBody('password', 'password length must between 6-12 characters').isLength({min:6, max:12})
    await req.checkBody('password', 'password is only alphanumaric').isAlphanumeric()
    await req.checkBody('password', 'password not matchs').equals(req.body.confirmPassword)
    await req.checkBody('email', 'invalid email').isEmail().isLength({max:40})
    await req.checkBody('email', 'email not matchs').equals(req.body.confirmEmail)

    let errors = req.validationErrors()
    if (errors) {
      for (i in errors) console.log(errors[i].msg)
      format_signup = false
    }
    else {
      req.sanitizeBody('email').normalizeEmail()
      format_signup = true
    }

    if (format_signup) {
      bcrypt.hash(req.body.password, 10, function(err, hash) {
        sql = 'INSERT INTO Users(user_id, user_password, user_email, user_created, user_type) VALUES (?, ?, ?, ?, ?)'
        con.query(sql, [req.body.ID,  hash,  req.body.email, moment().format(), 'player'], function (error, result) {
          if (!error) {
            console.log('registered user ' + req.body.ID)
            res.end('success')
          }
          else {
            console.log(error);
            res.end('fail')
          }
        })
      })
    }
    else {
      res.end('fail')
    }
  },

  login (req, res, next) {
    sql = 'SELECT * FROM users WHERE user_id = ?'
    con.query(sql, [req.body.ID], function (error, user) {
      if (error) {
        res.json({msg: 'Sorry, it has some error'})
        return
      }
      if (user.length == 0) {
        res.json({msg: 'ID does not exits'})
        return
      }
      else {
        bcrypt.compare(req.body.password, user[0].user_password, function(err, result) {
          if (result){
            //req.session.user_ID = req.body.ID
            res.json({user: user[0].user_id, msg: 'success'})
            return
          }
          else {
            res.json({msg: 'password does not correct'})
            return
          }
        })
      }
    })
  },

  logout (req, res) {
    delete req.session.user_ID
  }

}
