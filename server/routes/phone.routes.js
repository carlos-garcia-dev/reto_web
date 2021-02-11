const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')


const Phone = require('../models/phone.model')
const checkId = require('../middlewares/middlewares')
const { response } = require('express')



router.get('/getAllPhones', (req, res) => {

    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/getPhone/:id', checkId, (req, res) => {

    Phone
        .findById(req.params.id)
        .catch(err => res.status(500).json(err))
        .then(response => res.json(response))
})

    
router.post('/newPhone', (req, res) => {

    Phone
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.put('/editPhone/:id', checkId, (req, res) => {
    
    Phone
        .findByIdAndUpdate(req.params.id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router
