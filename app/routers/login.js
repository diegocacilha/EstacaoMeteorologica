module.exports = function(app){
    app.get('/login', function(req, res){
        if(req.session.uniqueId){
            res.redirect('/home');
            return;
        }
        res.render('login');
    });
    //Faz o POST para logar
    app.post('/login', function(req, res, next){
        var conn = app.infra.connFactory();
        var loginDAO = new app.infra.LoginDAO(conn);
        var session = req.session;
        
        loginDAO.lista(req.body, function(err, result){
            if(err){
                return next(err);
            }
            if(result.length == 1){
                session.uniqueId = req.body.email;
                session.cookie.maxAge = 3600000;
                res.json({
                    status: true, 
                    msg: 'Login efetuado com sucesso'
                });
            }else{
                res.json({
                    status: false, 
                    msg: 'Usuário ou senha inválido'
                });
            }
            
        });
        conn.end();
    });
}