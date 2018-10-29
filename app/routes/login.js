module.exports = function(app){
    app.get('/', function(req, res){
        if(req.session.uniqueId){
            res.redirect('/home');
            return;
        }
        res.render('login');
    });
    app.post('/', function(req, res, next){
        var conn = app.infra.connFactory();
        var loginDAO = new app.infra.LoginDAO(conn);
        var session = req.session;

        loginDAO.lista(req.body, function(err, result){
            if(err){
                return next(err);
            }
            if(result.length == 1){
                session.uniqueId = req.body.email;
                res.render('home');
            }else{
                res.json({
                    status: false, 
                    msg: 'Usuário ou senha inválido'
                });
                //res.send({status: false, msg: 'Login inválido'});
            }
            
        });
        conn.end();
    });
}