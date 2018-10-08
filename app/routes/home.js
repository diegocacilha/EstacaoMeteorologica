module.exports = function(app){
    app.get('/', function(req, res){
        res.render('login');
    });
    app.post('/', function(req, res){
        console.log('Vc está fazendo um POST');
        res.render('login');
    });
}