module.exports = (app) => {
    app.get('/home', (req, res) => {
        if(!req.session.uniqueId){
            res.redirect('/');
            return;
        }
        res.render('home');
    });
}