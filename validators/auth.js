const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validatorRegister = [
    check('nombre')
    .exists()
    .notEmpty()
    .isLength({min: 3, max:40}),
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),
    check('password')
    .exists()
    .notEmpty()
    .isLength({min: 3, max:15}),
    check('role'),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorLogin = [
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),
    check('password')
    .exists()
    .notEmpty()
    .isLength({min: 3, max:15}).isAlphanumeric(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]


module.exports = { validatorRegister, validatorLogin }