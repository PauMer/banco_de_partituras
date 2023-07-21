const { matchedData } = require('express-validator')
const { compositorModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')
const getProperties = require('../utils/handlePropertiesEngine')
const propertiesKey = getProperties()

const getItems = async (req, res) => {
    try {
        const data = await compositorModel.findAll({}) 
        res.send({data})
    } catch (e) {
        handleHttpError(res, 'Error_en_getItems')
    }
}
const getItem = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req
        const data = await compositorModel.findOneData(id) 
        res.send({data})
    } catch (e) {
        console.log(e)
        handleHttpError(res, 'ERROR_en_getItem')
    }
}

const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await compositorModel.create(body)
        res.send({data})
    } catch (e) {
        handleHttpError(res, 'Error_en_createItems')
    }
}
const updateItem = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const data = await compositorModel.findOneAndUpdate(
            id,
            body,
            { new: true } 
        )
        res.send({data})
    } catch (e) {
        console.log(e)
        handleHttpError(res, 'Error_en_updateItem')
    }
}

const deleteItem = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req
        const compositor = await compositorModel.findOne({where: {id}})
        const { nombre } = compositor
        await compositorModel.destroy({ where: { id } })
        res.send(`El compositor ${nombre} ha sido eliminado`)
    } catch (e) {
        handleHttpError(res, 'ERROR_en_deleteItem')
    }
}



module.exports = {getItem, getItems, createItem, updateItem, deleteItem}