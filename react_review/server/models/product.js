const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MyObjectId = mongoose.Types.ObjectId;


const Product = new Schema (
    {
        name:{type:String, required: true},
        price:{type:String, required: true},
        brand_id:{type:MyObjectId, ref:'Brand'}
    },
    {timestamps:true}
)

module.exports = mongoose.model('product', Product)    