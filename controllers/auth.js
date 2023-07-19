const { matchedData } = require('express-validator')
const { encrypt, compare } = require('../utils/handlePassword')
const { tokenSign } = require('../utils/handleJwt')
const { handleHttpError } = require('../utils/handleError')
const { userModel } = require('../models')

const register = async (req, res) => {
    try{
        req = matchedData(req)
        const passwordHash = await encrypt(req.password)
        const body = {...req, password: passwordHash}
        const dataUser = await userModel.create(body)
    
        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        } 
        res.send({data})
    } catch(e) {
        console.timeLog(e)
        handleHttpError(res, 'Error de registro')
    }
}

const login = async (req, res) => {
    try{
        req = matchedData(req)
        const user = await userModel.findOne({email:req.email})
        if(!user){
            handleHttpError(res, 'El usuario no existe', 404)
            return
        }

        const hashPassword = user.password
        const check = await compare(req.password, hashPassword)
        if(!check){
            handleHttpError(res, 'Password incorrecto', 401)
            return
        }
        user.set('password', undefined)
        const data = {
            token: await tokenSign(user),
            user
        }
        res.send({data})
    } catch(e) {
        handleHttpError(res, 'Error en el login')
    }
}


module.exports = { register, login }