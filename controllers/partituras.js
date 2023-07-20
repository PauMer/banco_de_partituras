const { matchedData } = require('express-validator')
const { partituraModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

const getItems = async (req, res) => {
    try {
        const data = await partituraModel.findAllData({})
        res.send({data})
    } catch (e) {
        console.log(e)
        handleHttpError(res, 'Error_en_getItems')
    }
}
const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const {id} = req;
        const data = await partituraModel.findOneData(id);
        res.send({ data });
    } catch (e) {
        handleHttpError(res, 'ERROR_en_getItem')
    }
}

const createItem = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await partituraModel.create(body)
        res.send({data})
    } catch (e) {
        handleHttpError(res, 'Error_en_createItems')
    }
}
const updateItem = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req)
        const data = await partituraModel.findOneAndUpdate( id, body )
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
        const data = await partituraModel.destroy({where: { id }})
        res.send({data})
    } catch (e) {
        console.log(e)
        handleHttpError(res, 'ERROR_en_deleteItem')
    }
}



module.exports = {getItem, getItems, createItem, updateItem, deleteItem}