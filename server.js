const express = require("express");
const bodyParser=require('body-parser')
const toyRoute=require('./api/toy.route')
const cors=require('cors')
const app=express()

// CONFIG
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cors())
const port=process.env.PORT||3000
app.listen(port,()=>console.log("App Listening on port :", port))

app.use('/api/toy',toyRoute)