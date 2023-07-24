const express = require('express')
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/periodos')
const { validatorCreateItem, validatorGetItem } = require('../validators/periodos')
const authMiddleware = require('../middleware/session')
const router = express.Router()

router.get('/', authMiddleware, getItems)

router.get('/:id', authMiddleware, validatorGetItem, getItem)

router.post('/', authMiddleware, validatorCreateItem, createItem)

router.put('/:id', authMiddleware, validatorCreateItem, validatorGetItem, updateItem)

router.delete('/:id', authMiddleware, validatorGetItem, deleteItem)


module.exports = router