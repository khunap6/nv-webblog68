const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const UserController = require('./controllers/UserController')

module.exports = (app) => {
    app.post('/register', 
        AuthenticationControllerPolicy.register, // ตรวจสอบก่อน
        AuthenticationController.register        // ถ้าผ่านค่อยบันทึก
    )
}

module.exports = (app) => {
    // Route สำหรับสมัครสมาชิก
    app.post('/register', AuthenticationController.register)
}

module.exports = (app) => {
    /* RESFUL Api for users management */
    
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
}