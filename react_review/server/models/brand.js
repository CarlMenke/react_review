const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MyObjectId = mongoose.Types.ObjectId;

const Brand = new Schema (
    {
        title:{type:String, required: true},
        city:{type:String, required: true},
        products:[MyObjectId]
    },
    {timestamps:true}
)

module.exports = mongoose.model('brand', Brand)    