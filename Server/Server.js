const express = require('express')
const cors = require('cors')
require('dotenv').config();
const app = express()

require("./config/db");


const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}! 👍`))