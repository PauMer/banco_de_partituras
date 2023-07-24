const express = require('express')
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/periodos')
const { validatorCreateItem, validatorGetItem } = require('../validators/periodos')
const authMiddleware = require('../middleware/session')
const checkRol = require('../middleware/rol')
const router = express.Router()

router.get('/', authMiddleware, getItems)

router.get('/:id', authMiddleware, validatorGetItem, getItem)

router.post('/', authMiddleware, checkRol(['admin']), validatorCreateItem, createItem)

router.put('/:id', authMiddleware, checkRol(['admin']), validatorCreateItem, validatorGetItem, updateItem)

router.delete('/:id', authMiddleware, checkRol(['admin']), validatorGetItem, deleteItem)


module.exports = router