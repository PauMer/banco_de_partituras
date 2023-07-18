const express = require('express')
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/partituras')
const authMiddleware = require('../middleware/session')
const checkRol = require('../middleware/rol')
const { validatorCreateItem, validatorGetItem } = require('../validators/partituras')
const router = express.Router()

router.get('/', authMiddleware, getItems)

router.get('/:id', authMiddleware, validatorGetItem, getItem)

router.post('/', authMiddleware, checkRol(['admin']), validatorCreateItem, createItem)

router.put('/:id', authMiddleware, validatorCreateItem, validatorGetItem, updateItem)

router.delete('/:id', authMiddleware, validatorGetItem, deleteItem)


module.exports = router