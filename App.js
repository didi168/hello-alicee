const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const path = require('path')
const http = require('http')
app.use(bodyParser.urlencoded({ extended: true }))
const port =  { argsNumber: 4000, message: `App is listening at 4000` }
http.createServer(app)
// app.use(express.static('public', { maxAge: '3d' }))
app.use(express.static(path.join(__dirname, 'public',)));


//Calling all routes for main website
const indexRouter = require('./routes/index')
app.use('/', indexRouter);

app.listen(port.argsNumber, () => { console.log(port.message)} )