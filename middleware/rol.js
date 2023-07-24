const { handleHttpError } = require('../utils/handleError')

const checkRol = (roles) => (req, res, next) => {
    try{
        const rolesByUser = req.headers.role
        const checkValueRol = roles.some((rolSingle) => rolesByUser.includes(rolSingle))

        if(!checkValueRol){
            handleHttpError(res, 'ERROR_NOT_PERMISSIONS', 403)
            return
        }
        next()
    }catch(e){
        handleHttpError(res, 'ERROR_ROLE', 403)
    }
}


module.exports = checkRol