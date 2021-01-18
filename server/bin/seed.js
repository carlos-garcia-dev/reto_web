const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const faker = require('faker')

const Phone = require('./../models/phone.model')
const User = require('./../models/user.model')


mongoose.connect(`mongodb://localhost/dot-env`, { useNewUrlParser: true, useUnifiedTopology: true })
Phone.collection.drop()
User.collection.drop()

const userList = []
const userPhones = []
const phoneList = ["iPhone 7","Galaxy S7",]




for (let i = 0; i <= 10; i++) {
    
    userList.push({
        name: faker.name.findName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: bcrypt.hashSync(faker.internet.password(), salt),
    })

}


// User
//     .create(userList)
//     .then(fillUsers => {
//         for (let i = 0; i <= 3; i++){
//             console.log(`CREATING PHONES: ${i + 1}`)
            
//             userPhones.push({
//                 name: everyModel[Math.round(Math.random() * (everyTag.length - 1))],
//             })}
//             return Phone.create(userPhones)})
//     .then(createdPhones => {
//         console.log(`CREATING USERS: ${userList.length}`)
//         const phonesPromises = []
//         createdPhones.forEach(elm => phonesPromises.push(User.findByIdAndUpdate(elm.phones,{$push:{phone: elm._id}}, {useFindAndModify: false})))
        
//         return Promise.all(publicationsPromises)})
//     .then(() => mongoose.connection.close())
//     .catch(err => console.log(err))
    