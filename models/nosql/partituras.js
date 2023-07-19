const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const partituraSchema = new mongoose.Schema(
    {
        nombre:{
            type:String
        },
        compositor_id:{
            type: String
        },
        periodo_id:{
            type: String
        },
        instrumento:{
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

partituraSchema.statics.findAllData = function () {
    const joinData = this.aggregate([
      {
        $lookup: {
          from: "storages", 
          localField: "storage_id", 
          foreignField: "_id",
          as: "archivo"
        },
      },
      {
        $unwind: "$archivo",
      }
    ]);
    return joinData;
  };

partituraSchema.statics.findOneData = function (id) {
const joinData = this.aggregate([
    {
    $match: {
        _id: mongoose.Types.ObjectId(id),
    },
    },
    {
    $lookup: {
        from: "storages",
        localField: "storage_id",
        foreignField: "_id", 
        as: "archivo"
    },
    },
    {
    $unwind: "$archivo",
    }
]);
return joinData;
};

partituraSchema.plugin(mongooseDelete, { overrideMethods: 'all'})
module.exports = mongoose.model('partituras', partituraSchema)