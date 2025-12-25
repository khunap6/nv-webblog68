const { User } = require('../models')
const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        // กำหนดกฎ (Schema) ในการตรวจสอบข้อมูล
        const schema = Joi.object({
            name: Joi.string().required(),
            lastname: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,32}$')).required(),
            status: Joi.string().optional()
        })

        // ทำการตรวจสอบ
        const { error } = schema.validate(req.body)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'รูปแบบอีเมลไม่ถูกต้อง'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'รหัสผ่านต้องเป็นตัวอักษรภาษาอังกฤษหรือตัวเลข และมีความยาว 8-32 ตัวอักษร'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'ข้อมูลในการลงทะเบียนไม่ถูกต้อง'
                    })
            }
        } else {
            next() // ถ้าผ่าน ให้ไปทำงานต่อที่ Controller
        }
    }
}

module.exports = {
    // ฟังก์ชันสำหรับสมัครสมาชิก
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            res.status(400).send({
                error: 'อีเมลนี้มีผู้ใช้งานแล้วในระบบ'
            })
        }
    }
}
