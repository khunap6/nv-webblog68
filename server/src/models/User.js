const Promise = require('bluebird') // *หมายเหตุ: Sequelize v6 รองรับ Promise ในตัว แต่เพื่อความชัวร์ในบาง env ใช้ async/await โดยตรงได้เลย
const bcrypt = require('bcryptjs')

function hashPassword (user, options) {
    const SALT_FACTOR = 8
    if (!user.changed('password')) {
        return
    }
    return bcrypt.genSalt(SALT_FACTOR)
        .then(salt => bcrypt.hash(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        })
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        hooks: {
            // ดักจับก่อนสร้าง (create) หรือแก้ไข (update)
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword
        }
    })

    // เพิ่ม Method สำหรับตรวจสอบรหัสผ่าน (ใช้ตอน Login)
    User.prototype.comparePassword = function (password) {
        return bcrypt.compare(password, this.password)
    }

    return User
}