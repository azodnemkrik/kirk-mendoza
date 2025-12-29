const express = require("express")
const app = express.Router()

//define api routes here
app.use('/users', require('./users'))
app.use('/reach-out', require('./reach-out'))

module.exports = app