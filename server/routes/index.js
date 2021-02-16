module.exports = app => {

    app.use('/api/phones', require('./phone.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/users', require('./user.routes.js'))
    app.use('/api/files', require('./file.routes.js'))
}