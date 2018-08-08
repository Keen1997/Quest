const con = require('../models')

module.exports = {

  createGM(ID, res) {
    sql = 'INSERT INTO gms(gm_id) VALUES (?)'
    con.query(sql, [ID], function (error, result) {
      if (!error) {
        console.log('registered gm ' + ID)
        res.end('success')
      }
      else {
        console.log(error)
        res.end('fail')
      }
    })
  },

}
