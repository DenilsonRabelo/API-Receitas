require('dotenv').config()
module.exports = {
    secret: process.env.secret,
    expireIn: "5h"
}