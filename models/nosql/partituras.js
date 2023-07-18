const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const partituraSchema = new mongoose.Schema(
    {
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
        },
        media_id:{
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

partituraSchema.plugin(mongooseDelete, { overrideMethods: 'all'})

module.exports = mongoose.model('partituras', partituraSchema)