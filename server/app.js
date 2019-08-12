'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// routes

// setting up the required headers for any HTTP request-response
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// setting up the body parser to handle post request
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// serving static files
app.use(express.static('./../'))

// setting up routes
app.use('/', (req, res, next) => {
  console.log('inside routes')
  next()
})

module.exports = app
