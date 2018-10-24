module.exports = function(app){
    app.get('/usuario', function(req, res){
        res.render('usuario');
    });
}