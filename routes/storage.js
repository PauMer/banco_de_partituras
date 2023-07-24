const express = require('express')
const router = express.Router()
const uploadMiddleware = require('../utils/handleStorage')
const authMiddleware = require('../middleware/session')
const {validatorGetItem} = require('../validators/storage')
const { getItems, getItem, deleteItem, createItem } = require('../controllers/storage')

router.get('/', authMiddleware, getItems)

router.get('/:id', authMiddleware, validatorGetItem, getItem)

router.delete('/:id', authMiddleware, validatorGetItem, deleteItem)

router.post('/', authMiddleware, uploadMiddleware.single('myfile'), createItem)

module.exports = router