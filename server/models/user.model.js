const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const Phone = require('./phone.model')

const userSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    },
    
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/manager00/image/upload/v1608205545/Avatars/unsplash0_tyfojr.png'
    },

    // phones: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Phone'
    // }]


}, { timestamps: true })

const User = mongoose.model('User', userSchema)
module.exports = User
