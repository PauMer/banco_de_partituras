const express = require('express')
const { getItems, getItem, updateItem, deleteItem } = require('../controllers/users')
const { validatorCreateItem, validatorGetItem } = require('../validators/users')
const authMiddleware = require('../middleware/session')
const checkRol = require('../middleware/rol')
const router = express.Router()

router.get('/', authMiddleware, checkRol(['admin']), getItems)

router.get('/:id', authMiddleware, validatorGetItem, getItem)

router.put('/:id', authMiddleware, validatorCreateItem, validatorGetItem, updateItem)

router.delete('/:id', authMiddleware, validatorGetItem, deleteItem)


module.exports = router