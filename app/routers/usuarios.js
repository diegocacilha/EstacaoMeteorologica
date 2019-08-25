module.exports = function(app){
    app.get('/usuarios', (req, res) => {
        if(!req.session.uniqueId){
            res.redirect('/');
            return;
        }
        res.render('usuario');
    });
    app.post('/usuarios/cadastro', (req, res) => {
        if(!req.session.uniqueId){
            res.redirect('/');
            return;
        }
        var conn = app.infra.connFactory();
        var usuarioDAO = new app.infra.UsuarioDAO(conn);
        
        usuarioDAO.lista(function(err, result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
        });

        usuarioDAO.create(req.body, function(err, result){
            if(err){
                res.json(err);
            }else{
                res.redirect('/');
            }

        });

        conn.end();
    });
}