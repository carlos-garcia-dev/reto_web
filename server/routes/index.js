module.exports = app => {

    app.use('/api/phones', require('./phone.routes.js'))
    app.use('/api/auth', require('./auth.routes.js'))
}