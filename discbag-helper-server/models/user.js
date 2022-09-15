const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema (
    {
        userName: {type: String , required: true},
        password: {type: String , required: true},
        profilePic : {type: String, required:true},
        userDiscs : {type: Array, required: false}
    },
    {timestamps:true},
)

module.exports = mongoose.model('user', User)