const con = require('../models')

module.exports = {

  checkKey(req, res) {
    sql = 'SELECT specialKey_to, specialKey_stage FROM specialKeys WHERE specialKey_key = ?'
    con.query(sql, [req.body.key], function (error, key) {
      if (error) {
        res.json({msg: 'Sorry, it has some error'})
        return
      }
      if (key.length == 0) {
        res.json({msg: 'Key does not exits'})
        return
      }
      else {
        if (key[0].specialKey_stage == 'empty') {
          res.json({keyTo: key[0].specialKey_to, msg: 'success'})
          return
        }
        else {
          res.json({msg: 'Key is already use'})
          return
        }
      }
    })
  }

}
