const user_controller =  require('./controllers/user_controller')
const player_controller =  require('./controllers/player_controller')
const key_special_controller =  require('./controllers/key_special_controller')

module.exports = (app) => {

  app.post('/signup', user_controller.signup)
  app.post('/login', user_controller.login)
  app.post('/haveID', user_controller.haveID)

  app.post('/haveEmail', player_controller.haveEmail)

  app.post('/playerStatus', player_controller.getStatus)

  app.post('/checkSpecialKey', key_special_controller.checkKey)

}
