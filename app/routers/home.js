module.exports = (app) => {
    app.get('/home', (req, res) => {
        if(!req.session.uniqueId){
            res.redirect('/login');
            return;
        }else 
            res.render('home');
    });
}