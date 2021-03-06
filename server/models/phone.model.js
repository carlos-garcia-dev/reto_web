const mongoose = require('mongoose')
const Schema = mongoose.Schema

const phoneSchema = new Schema({
   
    name: {
        type: String,
        required: true
    },
    manufacturer:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        default: 100,
        required: true
    },
    imageFileName:{
        type: String,
        required: true
    },
    screen:{
        type: String,
        required: true
    },
    processor:{
        type: String,
        required: true
    },
    ram:{
        type: Number,
        default: 2,
        required: true
    },
    
},
{ timestamps: true })

const Phone = mongoose.model('Phone', phoneSchema)
module.exports = Phone