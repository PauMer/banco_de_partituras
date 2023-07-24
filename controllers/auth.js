const { matchedData } = require('express-validator')
const { encrypt, compare } = require('../utils/handlePassword')
const { tokenSign } = require('../utils/handleJwt')
const { handleHttpError } = require('../utils/handleError')
const { userModel } = require('../models')

const register = async (req, res) => {
    try{
        req = matchedData(req)
        console.log(req)
        const password = await encrypt(req.password)
        const body = { ...req, password }
        const dataUser = await userModel.create(body)
        dataUser.set("password", password)
        const data = {
          token: await tokenSign(dataUser),
          user: dataUser,
        }
        res.status(201)
        res.send({ data })
      }catch(e){
        console.log(e)
        handleHttpError(res, "ERROR_REGISTER_USER")
      }
}

const login = async (req, res) => {
    try{
        req = matchedData(req)
        const user = await userModel.findOne({where: {email:req.email}})
        if(!user){
            handleHttpError(res, 'El usuario no existe', 404)
            return
        }
        const { password } = req
        const hashPassword = user.password
        const check = await compare(password, hashPassword)
        if(!check){
            console.log(check)
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
        console.log(e)
        handleHttpError(res, 'Error en el login')
    }
}


module.exports = { register, login }