const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const app = express();
var cors = require('cors')
var port = process.env.PORT || 3000
dotenv.config()

app.use(cors())
app.use(express.json());
mongoose.connect(`${process.env.MONGOOSE_URL}`)
require('./routes/routes.js')(app)
app.listen(port)
