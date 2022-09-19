const mongoose = require('mongoose')

mongoose
.connect('mongodb://127.0.0.1:27017/react_review')
.then(()=>{
    console.log('successfully conneted to react_review server')
})
.catch((error)=>{
    console.log('error connecting', error.message)
})

const db = mongoose.connection;

module.exports = db;