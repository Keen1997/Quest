const con = require('../models')

module.exports = {

  getStatus(req, res) {
    console.log(req.body.ID)
    sql = 'SELECT * FROM users WHERE user_id = ?'
    con.query(sql, [req.body.ID], function (error, user) {
      if (error) {
        console.log(error)
        return
      }
      if (user.length == 0) {
        console.log('some error')
        return
      }
      else {
        res.json({
          writing: user[0].user_status_writing,
          learning: user[0].user_status_learning,
          traveling: user[0].user_status_traveling,
          creative: user[0].user_status_creative,
          community: user[0].user_status_community,
          volunteer: user[0].user_status_volunteer
        })
      }
    })
  }

}
