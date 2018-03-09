const apiRouter = require('express').Router()
const contactRouter = require('./contacts')
const db = require('../db')

apiRouter.use('/contacts', contactRouter)

module.exports = apiRouter
