const JWT = require("jsonwebtoken")
const config = require("../config/JWTauth")
const {promisify} = require("util")
module.exports = async (req, res, next) => {
    const auth = req.headers.authorization

    if(!auth){
        return res.status(130).json({
            error: true,
            msg : "token não existe"
        })
    }
    
    const [, token] = auth.split(' ')
    
    try {
        const decod = await promisify(JWT.verify)(token, config.secret)
        console.log(decod)
        if(!decod){
            return res.status(401).json({
                error: true,
                msg : "token expirou"
            })
        } else {
            req.id = decod.id
            next()
        }
    } catch (error) {
        return res.status(401).json({
            error: true,
        })
    }
}