module.exports = app => {

    app.use('/api/telefonos', require('./phone.routes.js'))
}