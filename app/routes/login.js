module.exports = function(app){
    app.get('/', function(req, res){
        res.render('login');
    });
    app.post('/', function(req, res, next){
        var conn = app.infra.connFactory();
        var loginDAO = new app.infra.LoginDAO(conn);
        
        loginDAO.lista(req.body, function(err, result){
            if(err){
                return next(err);
                console.log(err);
            }else if(result.length > 0){
                res.format({
                    html: function(){//Frontend solicita pelo Accept um text/html
                        res.render('home');
                    },
                    json: function(){//fronent envia Accept: application/json
                        res.json(result);
                    }
                });
            }else{
                res.send({status: false, msg: 'Login inválido'});
            }
            
        });
        conn.end();
    });
}