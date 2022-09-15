const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema (
    {
        user_id: {type: String, required: true},
        topic_id: {type: String, required: true},
        content: {type: String , required: true},
        index: {type:Number, required:true}
    },
    {timestamps:true},
)

module.exports = mongoose.model('post', Post)