const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-clodinary')
const multer = require('multer')


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
})


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'call-app',
        format: async (req, file) => 'png',  //'jpeg', 'jfif', 'jpg', 'jpeg2000', 'gif' 
    }
})


const uploadCloud = multer({ storage: storage })


module.exports = uploadCloud



