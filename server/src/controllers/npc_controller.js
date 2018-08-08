const con = require('../models')

module.exports = {

  createNPC(ID, contact, res) {
    sql = 'INSERT INTO npcs(npc_id, npc_contact) VALUES (?, ?)'
    con.query(sql, [ID, contact], function (error, result) {
      if (!error) {
        console.log('registered npc ' + ID)
        res.end('success')
      }
      else {
        console.log(error)
        res.end('fail')
      }
    })
  },

}
