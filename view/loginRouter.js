const loginController = require("../controller/loginController")

const express = require("express")
const router = express.Router()



router.post("/login", (req, res) => {
    return loginController.login(req, res)
})
router.post("/123", (req ,res) => {
    return  loginController.addlogin(req,res)
})


module.exports = app => app.use('/receitas', router)