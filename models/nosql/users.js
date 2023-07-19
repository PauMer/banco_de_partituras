const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const userSchema = new mongoose.Schema(
    {
        nombre:{
            type:String
        },
        email:{
            type: String,
            unique: true
        },
        password:{
            type: String
        },
        role:{
            type:['user', 'admin'],
            default: 'admin'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

userSchema.plugin(mongooseDelete, { overrideMethods: 'all'})

module.exports = mongoose.model('users', userSchema)
