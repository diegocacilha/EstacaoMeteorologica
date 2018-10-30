module.exports = (app) => {
    app.get('/', (req, res) => {
        if(!req.session.uniqueId){
            res.redirect('/login');
            return;
        }
        res.render('home');
    });
}