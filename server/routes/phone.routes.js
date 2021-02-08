const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')


const Phone = require('../models/phone.model')
const checkId = require('../middlewares/middlewares')



router.get('/getAllPhones', (req, res) => {

    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/getPhone/:id', checkId, (req, res) => {

    Phone.findById(req.params._id)
         .then(response => res.json(response))
         .catch(err => res.status(500).json(err))
})




module.exports = router
