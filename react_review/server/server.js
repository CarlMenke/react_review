const express = require('express')
const routes = require('./routes')
const db = require('./db')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')



//port access

const PORT = process.env.PORT ||  3001

const app = express() 

app.use(cors(),function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', routes);

db.on('error', console.error.bind(console, 'mongoDB connection error:'))

app.listen(PORT, ()=>{
    console.log(`express listening on port ${PORT}`)
})