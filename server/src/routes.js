const user_controller =  require('./controllers/user_controller')
const user_status_controller =  require('./controllers/user_status_controller')

module.exports = (app) => {

  app.post('/have_ID', user_controller.have_ID)
  app.post('/have_email', user_controller.have_email)

  app.post('/signup', user_controller.signup)

  app.post('/login', user_controller.login)

  app.post('/user_status', user_status_controller.getStatus)
}
