const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const path = require('path')
const http = require('http')
app.use(bodyParser.urlencoded({ extended: true }))
const port =  { argsNumber: 5500, message: `App is listening at 5500` }
app.use(express.static(path.join(__dirname, 'public',)));

const server = http.createServer(app)

//Calling all routes for main website
const indexRouter = require('./routes/home')
app.use('/', indexRouter);

server.listen(port.argsNumber, () => { console.log(port.message)} )