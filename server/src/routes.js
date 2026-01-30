const UserController = require('./controllers/UserController')
const AuthenticationController = require('./controllers/AuthenticationController')
const UserAuthenController = require('./controllers/UserAuthenController')

module.exports = (app) => { 
    // create user
    app.post('/user', UserController.create)
    // edit user, suspend, active
    app.put('/user/:userId', UserController.put)
    // delete user
    app.delete('/user/:userId', UserController.remove)
    // get user by id
    app.get('/user/:userId', UserController.show)
    // get all user
    app.get('/users', UserController.index)

    // Route สำหรับสมัครสมาชิก
    app.post('/register', AuthenticationController.register)

    // ... routes เดิม
    app.post('/login', UserAuthenController.login)
    app.post('/register', UserAuthenController.register)

}


