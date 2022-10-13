const User = require("../model/User")
const jwt = require("jsonwebtoken")
const config = require("../config/JWTauth")

async function login (req, res) {
    const {email, password} = req.body

    const usuario = await User.findOne({email})

    if(!usuario){
        return res.status(400).json({
            error: true,
            message: "Nenhum usuário encontrado"
        })
    }else if (!usuario.password === password){
        return res.status(400).json({
            error: true,
            msg: "Nenhum usuário encontrado"
        })
    }

    return res.status(200).json({
        usuario: {
            nome : usuario.nome,
            email: usuario.email,
        },
        token : jwt.sign(
            {id: usuario.id},
            config.secret,
            {expiresIn: config.expireIn}
        )
    })



}

async function addlogin(req, res) {
    const {nome , email, senha} = req.body

    const usuario = await User.create({nome, email, senha})

    return res.json("ok")
}


module.exports = { login, addlogin}