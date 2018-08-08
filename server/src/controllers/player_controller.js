const con = require('../models')

module.exports = {

  createPlayer(ID, email, res) {
    sql = 'INSERT INTO players(player_id, player_email) VALUES (?, ?)'
    con.query(sql, [ID, email], function (error, result) {
      if (!error) {
        console.log('registered player ' + ID)
        res.end('success')
      }
      else {
        console.log(error)
        res.end('fail')
      }
    })
  },

  haveEmail(req, res) {
    sql = 'SELECT player_id FROM players WHERE player_email = ?'
    con.query(sql, [req.body.email], function (err, result) {
      if (result.length!=0) res.end('have')
      else res.end('no have')
    })
  },

  getStatus(req, res) {
    sql = 'SELECT * FROM players WHERE player_id = ?'
    con.query(sql, [req.body.ID], function (error, player) {
      if (error) {
        console.log(error)
        return
      }
      if (player.length == 0) {
        console.log('some error')
        return
      }
      else {
        res.json({
          all: player[0].player_status_writing + player[0].player_status_learning + player[0].player_status_traveling + player[0].player_status_creative + player[0].player_status_community + player[0].player_status_volunteer,
          writing: player[0].player_status_writing,
          learning: player[0].player_status_learning,
          traveling: player[0].player_status_traveling,
          creative: player[0].player_status_creative,
          community: player[0].player_status_community,
          volunteer: player[0].player_status_volunteer
        })
      }
    })
  }

}
