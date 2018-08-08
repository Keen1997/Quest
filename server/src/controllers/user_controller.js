const bcrypt = require('bcrypt')
const moment = require('moment')
const con = require('../models')

const player_controller =  require('./player_controller')
const npc_controller =  require('./npc_controller')
const gm_controller =  require('./gm_controller')

module.exports = {

  async signup(req, res) {

    let format_signup = false

    await req.checkBody('ID', 'ID length must between 6-12 characters').isLength({min:6, max:12})
    await req.checkBody('ID', 'ID is only alphanumaric').isAlphanumeric()
    await req.checkBody('password', 'password length must between 6-12 characters').isLength({min:6, max:12})
    await req.checkBody('password', 'password is only alphanumaric').isAlphanumeric()
    await req.checkBody('password', 'password not matchs').equals(req.body.confirmPassword)

    if (req.body.email) {
      await req.checkBody('email', 'invalid email').isEmail().isLength({max:40})
      await req.checkBody('email', 'email not matchs').equals(req.body.confirmEmail)
    }

    let errors = req.validationErrors()
    if (errors) {
      for (i in errors) console.log(errors[i].msg)
      format_signup = false
    }
    else {
      if (req.body.email) req.sanitizeBody('email').normalizeEmail()
      format_signup = true
    }

    if (format_signup) {
      bcrypt.hash(req.body.password, 10, function(err, hash) {
        sql = 'INSERT INTO users(user_id, user_password, user_type, user_created) VALUES (?, ?, ?, ?)'
        con.query(sql, [req.body.ID,  hash, req.body.type, moment().format()], function (error, result) {
          if (!error) {

            if (req.body.type == 'player') player_controller.createPlayer(req.body.ID, req.body.email, res)

            else if (req.body.type == 'npc') npc_controller.createNPC(req.body.ID, req.body.contact, res)

            else if (req.body.type == 'gm') gm_controller.createGM(req.body.ID, res)

          }
          else {
            console.log(error)
            res.end('fail')
          }
        })
      })
    }
    else {
      res.end('fail')
    }

  },

  haveID(req, res) {
    sql = 'SELECT user_id FROM users WHERE user_id = ?'
    con.query(sql, [req.body.ID], function (err, result) {
      if (result.length!=0) res.end('have')
      else res.end('no have')
    })
  },

  login (req, res) {
    sql = 'SELECT * FROM users WHERE user_id = ?'
    con.query(sql, [req.body.ID], function(error, user) {
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
            res.json({userID: user[0].user_id, userType: user[0].user_type, msg: 'success'})
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
    //delete req.session.player_ID
  },

}
