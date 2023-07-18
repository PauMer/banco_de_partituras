const express = require('express')
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/periodos')
const { validatorCreateItem, validatorGetItem } = require('../validators/periodos')
const router = express.Router()

router.get('/', getItems)

router.get('/:id', validatorGetItem, getItem)

router.post('/', validatorCreateItem, createItem)

router.put('/:id', validatorCreateItem, validatorGetItem, updateItem)

router.delete('/:id', validatorGetItem, deleteItem)


module.exports = router