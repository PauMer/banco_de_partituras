const { matchedData } = require("express-validator")
const { storageModel } = require("../models")
const { handleHttpError } = require("../utils/handleError")
const getProperties = require('../utils/handlePropertiesEngine')
const propertiesKey = getProperties()

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

const getItems = async (req, res) => {
  try {
    const data = await storageModel.findAll({})
    res.send({ data })
  } catch (e) {
    console.log(e)
    handleHttpError(res, "ERROR_LIST_ITEMS")
  }
}

const getItem = async (req, res) => {
  try {
    req = matchedData(req)
    const query = {
        [propertiesKey.id]:req[propertiesKey.id]
      }
    const data = await storageModel.findOne(query) 
    res.send({data})
  } catch (e) {
    console.log(e)
    handleHttpError(res, "ERROR_DETAIL_ITEMS")
  }
}

const createItem = async (req, res) => {
  try {
    const { file } = req
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    }
    const data = await storageModel.create(fileData)
    res.status(201)
    res.send({ data })
  } catch (e) {
    handleHttpError(res, "ERROR_DETAIL_ITEMS")
  }
}

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const dataFile = await storageModel.findByPk(id)
    const deleteResponse = await storageModel.destroy({where: { id }})
    const { filename } = dataFile
    const filePath = `${MEDIA_PATH}/${filename}`
    const data = {
      filePath,
      deleted: deleteResponse.matchedCount,
    }

    res.send({ data })
  } catch (e) {
    console.log(e)
    handleHttpError(res, "ERROR_DETAIL_ITEMS")
  }
}

module.exports = { getItems, getItem, createItem, deleteItem }