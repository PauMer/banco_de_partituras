const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const periodoSchema = new mongoose.Schema(
    {
        nombre:{
            type:String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

periodoSchema.plugin(mongooseDelete, { overrideMethods: 'all'})

module.exports = mongoose.model('periodos', periodoSchema)