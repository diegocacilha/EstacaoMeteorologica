module.exports = (app) => {
    app.use((req, res) => {
        res.redirect('/login');
    })
}