const express = require('express')
const session = require('express-session')
const mongoose = require('mongoose')
const config = require('./config/database')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

//connect to Mongo
mongoose.connect(config.database)
let db = mongoose.connection

db.once('open',function(){
	console.log('connection to mongdb ...')
})

db.on('error', function(err){
	console.log(err)
})

let USER = require('./models/users')

app.listen(5000, ()=>{
    console.log('server started on port 5000 ....')
})