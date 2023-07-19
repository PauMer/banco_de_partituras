const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validatorCreateItem = [
    check('nombre').exists().notEmpty(),
    check('compositor_id').exists().notEmpty(),
    check('periodo_id').exists().notEmpty(),
    check('instrumento').exists().notEmpty(),
    check('storage_id').exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorGetItem = [
    check('id')
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]
module.exports = { validatorCreateItem, validatorGetItem }