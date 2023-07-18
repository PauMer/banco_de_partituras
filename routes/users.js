const express = require('express')
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/users')
const { validatorCreateItem, validatorGetItem } = require('../validators/users')
const router = express.Router()

router.get('/', getItems)

router.get('/:id', validatorGetItem, getItem)

router.post('/', validatorCreateItem, createItem)

router.put('/:id', validatorCreateItem, validatorGetItem, updateItem)

router.delete('/:id', validatorGetItem, deleteItem)


module.exports = router