const mongoose = require('mongoose')

const storageSchema = new mongoose.Schema(
    {
        id:{
            type: mongoose.Types.ObjectId
        },
        url:{
            type:String
        },
        filename:{
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('storages', storageSchema)