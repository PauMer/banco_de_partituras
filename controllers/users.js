const { matchedData } = require('express-validator')
const { userModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')
const getProperties = require('../utils/handlePropertiesEngine')
const propertiesKey = getProperties()

const getItems = async (req, res) => {
    try {
        const data = await userModel.findAll({}) 
        res.send({data})
    } catch (e) {
        console.log(e)
        handleHttpError(res, 'Error_en_getItems')
    }
}
const getItem = async (req, res) => {
    try {
        req = matchedData(req)
        const { id } = req 
        const data = await userModel.findOne({where: {id}}) 
        res.send({data})
    } catch (e) {
        console.log(e)
        handleHttpError(res, 'ERROR_en_getItem')
    }
}

const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await userModel.create(body)
        res.send({data})
    } catch (e) {
        handleHttpError(res, 'Error_en_createItems')
    }
}
const updateItem = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const data = await userModel.findOneAndUpdate(
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
        const data = await userModel.destroy({ where: { id } })
        res.send('Usuario eliminado exitosamente')
    } catch (e) {
        handleHttpError(res, 'ERROR_en_deleteItem')
    }
}



module.exports = {getItem, getItems, createItem, updateItem, deleteItem}