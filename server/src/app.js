let express = require('express');
let bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// เรียกใช้ routes โดยส่ง app เข้าไป
require('./routes')(app)

let port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});