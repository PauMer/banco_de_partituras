const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const compositorSchema = new mongoose.Schema(
    {
        nombre:{
            type:String
        },
        periodo:{
            type: String
        }
    }
)

compositorSchema.plugin(mongooseDelete, { overrideMethods: 'all'})

module.exports = mongoose.model('compositores', compositorSchema)