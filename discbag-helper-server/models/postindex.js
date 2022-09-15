const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostIndex = new Schema (
    {
        index: {type: Number, required: true},
    },
    {timestamps:true},
)

module.exports = mongoose.model('postindex', PostIndex)