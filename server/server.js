'use strict'

const http = require('http')
const app = require('./app.js')
const server = http.createServer(app)
const PORT = require('./config/config.js').SERVER_PORT

server.listen(PORT, () => {
  console.log('Server running on ', PORT)
})
