module.exports = function(app){
    app.get('/cadastro', (req, res) => {
        if(!req.session.uniqueId){
            res.redirect('/');
            return;
        }
        res.render('cadastro');
    });
    app.post('/cadastro', (req, res) => {
        if(!req.session.uniqueId){
            res.redirect('/');
            return;
        }
        var conn = app.infra.connFactory();
        var usuarioDAO = new app.infra.UsuarioDAO(conn);
        
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