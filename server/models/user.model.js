const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Phone = require('./phone.model')


const userSchema = new Schema({
    
    name: {
        type: String,
        // match: /^[a-z ,.'-]+$/i,
        // min: 5,
        required: true
    },
    lastName: {
        type: String,
        // match: /^[a-z ,.'-]+$/i,
        // min: 5,
        required: true
    },
    username: {
        type: String,
        // match: /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/,
        required: true
    },
    email: {
        type: String,
        // match: /^\S+@\S+\.\S+$/,
        required: true  
    },
    password: {
        type: String,
        // match: /^[a-zA-Z0-9_]{6,}[a-zA-Z]+[0-9]*$/,
        min: 6,
        required: true
    },
    userType: {
        type: String,
        enum: ['User', 'Brand', 'Admin'],
        default: 'User'
    },
    phones: [{
        type: Schema.Types.ObjectId,
        ref: 'Phone'
    }],
    active: {
        type: Boolean,
        default: true,
        required: true
    },

},
{ timestamps: true })

const User = mongoose.model('User', userSchema)
module.exports = User
