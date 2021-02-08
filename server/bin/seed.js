const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const faker = require('faker')


const Phone = require('./../models/phone.model')


mongoose.connect(`mongodb://localhost/call-app`, { useNewUrlParser: true, useUnifiedTopology: true })


