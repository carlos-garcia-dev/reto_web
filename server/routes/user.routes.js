const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const User = require('../models/user.model')

const checkId = require('../middlewares/middlewares')
const { response } = require('express')


router.get('/getAllUsers', (req, res) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/getUser/:id', checkId, (req, res) => {

    User
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.post('/newUser', (req, res) => {

    User
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.put('/editUser/:id', checkId, (req, res) => {

    User
        .findByIdAndUpdate(req.params.id, req.body)
        .then(response => res.json(response))
        .cathc(err => res.status(500).json(err))
})


module.exports = router