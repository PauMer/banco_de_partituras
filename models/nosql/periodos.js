const mongoose = require('mongoose')

const periodoSchema = new mongoose.Schema(
    {
        id:{
            type: mongoose.Types.ObjectId
        },
        nombre:{
            type:String
        }
    }
)

module.exports = mongoose.model('periodo', periodoSchema)