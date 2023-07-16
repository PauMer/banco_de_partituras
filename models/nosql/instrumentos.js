const mongoose = require('mongoose')

const instrumentoSchema = new mongoose.Schema(
    {
        id:{
            type: mongoose.Types.ObjectId
        },
        nombre:{
            type:String
        }
    }
)

module.exports = mongoose.model('instrumentos', instrumentoSchema)