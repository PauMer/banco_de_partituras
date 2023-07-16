const mongoose = require('mongoose')

const partituraSchema = new mongoose.Schema(
    {
        id:{
            type: mongoose.Types.ObjectId
        },
        nombre:{
            type:String
        },
        compositor:{
            type: String
        },
        instrumento:{
            type: String
        },
        periodo:{
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('partituras', partituraSchema)