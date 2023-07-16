const mongoose = require('mongoose')

const compositorSchema = new mongoose.Schema(
    {
        id:{
            type: mongoose.Types.ObjectId
        },
        nombre:{
            type:String
        },
        periodo:{
            type: String
        }
    }
)

module.exports = mongoose.model('compositores', compositorSchema)